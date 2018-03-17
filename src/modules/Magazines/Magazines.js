import React, { Component } from 'react';
import { shape, arrayOf, bool, func, number, string } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Collapsible from 'react-collapsible';
import Pagination from 'react-paginate';
import moment from 'moment';
import IconSearch from 'react-icons/lib/fa/search';

import Components from './components';
import { fetchMagazines, handleSelected } from '../../store/magazines';

import Loading from './../../components/Loading';
import Input from './../../components/Input';
import Button from './../../components/Button';

class Magazines extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      year: '',
      character: '',
      currentPage: 0
    };
  }

  static propTypes = {
    data: shape({
      total: number.isRequired,
      results: arrayOf(shape({
        title: string.isRequired
      }))
    }).isRequired,
    loading: bool.isRequired,
    selected: shape({}),
    fetchMagazines: func.isRequired,
    handleSelected: func.isRequired
  }

  componentDidMount() {
    if (!this.props.data) this.props.fetchMagazines();
  }

  handleState = (field, value) => {
    this.setState({ [field]: value });
  }

  handleCollapse = (item) => {
    const { selected, handleSelected } = this.props;

    if (item.id !== selected.id) {
      handleSelected(item);
    } else {
      handleSelected('');
    }
  }

  changePage = (value) => {
    this.handleState('currentPage', value);
    this.onSubmit();
  }

  onSubmit = () => {
    const { title, year, currentPage } = this.state;
    const data = {
      title,
      year,
      page: currentPage
    };

    this.props.fetchMagazines(data);
  }

  renderDates = (dates) => {
    return (
      <Components.Dates>
        {dates.map((el, index) => {
          switch (el['type']) {
            case 'onsaleDate':
              return <h3 key={index}>Publicado: <span>{moment(el['date']).format('DD/MM/YYYY')}</span></h3>;
            case 'unlimitedDate':
              return <h3 key={index}>Add ao Marvel Ilimitado: <span>{moment(el['date']).format('DD/MM/YYYY')}</span></h3>;
            default:
              return '';
          }
        })}
      </Components.Dates>
    );
  }

  renderCharacters = (characters) => {
    const { character } = this.state;

    return characters.items.map((item, index) => {
      return item.name.match(character) ? <li key={index}>{item.name}</li> : '';
    });
  }

  renderURL = (urls) => {
    return urls.map((item) => {
      return item['type'] === 'detail' ? item.url : '';
    });
  }

  renderMagazines = () => {
    const { loading, data, selected } = this.props;
    const { character } = this.state;

    if (loading) return <Loading />;

    return data ? data.results.map((item) => {
      const { title, thumbnail, description } = item;
      const open = selected.id === item.id;
      const cover = `${thumbnail.path}.${thumbnail.extension}`;

      return (
        <Collapsible
          trigger={title}
          key={item.id}
          open={open}
          classParentString="magazine"
          handleTriggerClick={() => this.handleCollapse(item)}
        >
          <Components.Cover>
            <img src={cover} alt={title} />
          </Components.Cover>
          <Components.Description>
            {this.renderDates(item.dates)}
            <h3>Descrição</h3>
            <h4>{description}</h4>
            <Button
              text="Ver mais"
              onPress={() => window.open(this.renderURL(item.urls))}
            />
          </Components.Description>
          {item.characters.items.length ? (
            <Collapsible
              trigger="Personagens"
              classParentString="characters"
            >
              <Input
                label="Buscar personagem"
                id="character"
                placeholder="ex: Magneto"
                onChange={value => this.handleState('character', value)}
                value={character}
              />
              <ul>
                {this.renderCharacters(item.characters)}
              </ul>
            </Collapsible>
          ) : ''}
        </Collapsible>
      );
    }) : '';
  }

  render() {
    const { title, year, currentPage } = this.state;
    const { loading, data } = this.props;
    const isMobile = window.innerWidth < 576;

    return (
      <Components.Wrapper>
        <Components.Search>
          <Input
            label="Título"
            id="title"
            placeholder="ex: Spider-Man"
            onChange={value => this.handleState('title', value)}
            value={title}
            disabled={loading}
          />
          <Input
            label="Ano de inicio"
            id="year"
            placeholder="ex: 2007"
            onChange={value => this.handleState('year', value)}
            value={year}
            disabled={loading}
          />
          <Button
            icon={<IconSearch />}
            disabled={loading}
            onPress={() => this.onSubmit()}
          />
        </Components.Search>
        <Components.Content>
          {this.renderMagazines()}
        </Components.Content>
        <Pagination
          pageCount={Math.ceil(data.total / 10)}
          pageRangeDisplayed={isMobile ? 1 : 3}
          marginPagesDisplayed={isMobile ? 1 : 2}
          onPageChange={e => this.changePage(e.selected)}
          containerClassName="pagination"
          previousLabel="Anterior"
          nextLabel="Próxima"
          forcePage={currentPage}
        />
      </Components.Wrapper>
    );
  }
}

export default connect(
  store => ({
    loading: store.magazines.loading,
    data: store.magazines.data ? store.magazines.data.data : '',
    error: store.magazines.error,
    selected: store.magazines.selected
  }),
  dispatch => bindActionCreators({ fetchMagazines, handleSelected }, dispatch)
)(Magazines);
