import React, { Component, Fragment } from 'react'
import { arrayOf, func } from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Collapsible from 'react-collapsible'
import Pagination from 'react-paginate'
import IconSearch from 'react-icons/lib/fa/search'

import Components from './components'
import { fetchMagazines } from '../../store/magazines'

import Loading from './../../components/Loading'

class Magazines extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      year: '',
      currentPage: 0
    }
  }

  static propTypes = {
    data: arrayOf({}),
    fetchMagazines: func
  }

  componentDidMount() {
    if (!this.props.data) this.props.fetchMagazines();
  }

  handleState = (field, value) => {
    this.setState({ [field]: value })
  }

  changePage = (value) => {
    this.handleState('currentPage', value)
    this.onSubmit()
  }

  onSubmit = () => {
    const { title, year, currentPage } = this.state
    const data = {
      title: title,
      year: year,
      page: currentPage
    }

    this.props.fetchMagazines(data)
  }

  renderMagazines = () => {
    const { loading, data } = this.props

    if (loading) return <Loading />

    return data ? data.results.map(item => {
      const { title } = item

      return (
        <Collapsible trigger={title}>
          content
        </Collapsible>
      )
    }) : ''
  }

  render() {
    const { title, year, currentPage } = this.state
    const { loading, data } = this.props
    console.log(currentPage)

    return (
      <Components.Wrapper>
        <Components.Search>
          <Components.InputGroup>
            <Components.InputLabel htmlFor="title">Título</Components.InputLabel>
            <Components.InputTitle
              placeholder="ex: Spider-Man"
              id="title"
              onChange={e => this.handleState('title', e.target.value)}
              value={title}
              disabled={loading}
            />
          </Components.InputGroup>
          <Components.InputGroup>
            <Components.InputLabel htmlFor="year">Ano de inicio</Components.InputLabel>
            <Components.InputTitle
              placeholder="ex: 2007"
              id="year"
              onChange={e => this.handleState('year', e.target.value)}
              value={year}
              disabled={loading}
            />
          </Components.InputGroup>
          <Components.BtnSearch
            onClick={() => this.onSubmit()}
            disabled={loading}
          >
            <IconSearch />
          </Components.BtnSearch>
        </Components.Search>
        <Components.Content>
          {this.renderMagazines()}
        </Components.Content>
        <Pagination
          pageCount={Math.ceil(data.total/10)}
          pageRangeDisplayed={5}
          marginPagesDisplayed={3}
          onPageChange={e => this.changePage(e.selected)}
          containerClassName="pagination"
          previousLabel="Anterior"
          nextLabel="Próxima"
          forcePage={currentPage}
        />
      </Components.Wrapper>
    )
  }
}

export default connect(
  store => ({
    loading: store.magazines.loading,
    data: store.magazines.data ? store.magazines.data.data : '',
    error: store.magazines.error
  }),
  dispatch => bindActionCreators({ fetchMagazines }, dispatch)
)(Magazines)
