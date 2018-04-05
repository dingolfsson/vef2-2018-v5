import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Link, Switch, NavLink } from 'react-router-dom';

import './Navigation.css';

import NotFound from '../not-found';
import School from '../school';
import Home from '../home';

/* hér ætti að sækja gögn frá vefþjónustu fyrir valmynd */

export default class Navigation extends Component {
  state = { data: null, loading: true, error: false }

  async componentDidMount() {
    try {
      const data = await this.fetchData();
      console.log(data);
      this.setState({ data, loading: false });
    } catch (e) {
      console.error('Error fetching data', e);
      this.setState({ error: true, loading: false });
    }
  }

  async fetchData() {
    const response = await fetch(process.env.REACT_APP_SERVICE_URL);
    const data = await response.json();
    return data;
  }
  render() {
    const { data, loading, error } = this.state;
    if (loading) {
      return (<div>Sæki gengi...</div>);
    }

    if (error) {
      return (<div>Villa við að sækja gengi</div>);
    }
    return (
      <nav className="navigation">
        <nav>
          <ul>
            {Object.keys(data.schools).map((i) => (
              <li key={i}>
                <NavLink to={`/${data.schools[i].slug}`}>{data.schools[i].name}</NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <section>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/:svid" component={School} />
            <Route component={NotFound} />
          </Switch>
        </section>
      </nav>
    );
  }
}