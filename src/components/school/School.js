import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './School.css';

/**
 * Í þessum component ætti að vera mest um að vera og séð um að:
 * - Sækja gögn fyrir svið og birta
 * - Opna/loka deildum
 */

export class Fetch extends Component {
  static propTypes = {
    render: PropTypes.func,
  }

  state = { data: null, loading: true, error: false }

  async componentDidMount() {
    try {
      const data = await this.fetchData();
      this.setState({ data, loading: false });
    } catch (e) {
      console.error('Error fetching data', e);
      this.setState({ error: true, loading: false });
    }
  }

  async fetchData() {
    const { url } = this.props;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  render() {
    return this.props.render(this.state);
  }
}

export default class School extends Component {
  render() {

    return (
      <section className="school">
        <p>School</p>
      </section>
    );
  }
}
