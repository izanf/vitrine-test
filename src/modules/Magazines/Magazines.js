import React, { Component } from 'react';
import { arrayOf, func } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchMagazines } from '../../store/magazines';

class Magazines extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  static propTypes = {
    data: arrayOf({}),
    fetchMagazines: func
  }

  componentDidMount() {
    if (!this.props.data) this.props.fetchMagazines();
  }

  render() {
    return (
      <div>Magazines</div>
    );
  }
}

export default connect(
  store => ({
    loading: store.magazines.loading,
    data: store.magazines.data,
    error: store.magazines.error
  }),
  dispatch => bindActionCreators({ fetchMagazines }, dispatch)
)(Magazines);
