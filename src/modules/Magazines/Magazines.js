import React, { Component } from 'react';
import { shape, arrayOf, bool, func, number, string } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Collapsible from 'react-collapsible';
import Pagination from 'react-paginate';
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

  renderMagazines = () => {
    const { loading, data, selected } = this.props;

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
          handleTriggerClick={() => this.handleCollapse(item)}
        >
          <Components.Cover>
            <img src={cover} alt={title} />
          </Components.Cover>
          <Components.Description>
            <h3>Descrição</h3>
            <h4>{description}</h4>
            <Button
              text="Ver mais"
              onPress={() => window.open('https://www.google.com')}
            />
          </Components.Description>
        </Collapsible>
      );
    }) : '';
  }

  render() {
    const { title, year, currentPage } = this.state;
    const { loading, data } = this.props;

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
          pageRangeDisplayed={5}
          marginPagesDisplayed={3}
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
