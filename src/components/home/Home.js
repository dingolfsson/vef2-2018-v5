import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Home.css';

/* hér ætti að sækja forsíðu vefþjónustu til að sækja stats */

export default class Home extends Component {

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
    const response = await fetch(process.env.REACT_APP_SERVICE_URL + 'stats');
    const data = await response.json();
    console.log(data)
    return data;
  }

  render() {
    const { data, loading, error } = this.state;

    if (loading) {
      return (<div>Sæki gögn...</div>);
    }

    if (error) {
      return (<div>Villa við að sækja gögn</div>);
    }
    const result = data.stats;

    return (
      <section>
        <h2>Tölfræði</h2>
        <table>
        <tbody>
        {Object.keys(result).map((item, i) => (
          <tr key={i}>
          <td>{item}</td>
          <td>{result[item]} </td>
        </tr>
        ))}
        </tbody>
        </table>
      </section>
    );
  }
}
            