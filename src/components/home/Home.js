import React, { Component } from 'react';

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
          <tr>
          <td className="name">Fjöldi prófa</td>
          <td>{result.numTests}</td>
          </tr>
          <tr>
          <td className="name">Fjöldi nemenda í öllum prófum</td>
          <td>{result.numStudents}</td>
          </tr>
          <tr>
          <td className="name">Meðalfjöldi nemenda í prófi</td>
          <td>{result.averageStudents}</td>
          </tr>
          <tr>
          <td className="name">Minnsti fjöldi nemenda í prófi</td>
          <td>{result.min}</td>
          </tr>
          <tr>
          <td className="name">Mesti fjöldi nemenda í prófi</td>
          <td>{result.max}</td>
          </tr>
        {/* {Object.keys(result).map((val, i) => (
          <tr key={i}>
          <td>{val}</td>
          <td>{result[val]} </td>
        </tr> 
        ))}*/}
        </tbody>
        </table>
      </section>
    );
  }
}
            