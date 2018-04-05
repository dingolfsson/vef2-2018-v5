import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Link, NavLink, Switch } from 'react-router-dom'

import './Navigation.css';
import { Fetch } from './../school/School';

/* hér ætti að sækja gögn frá vefþjónustu fyrir valmynd */

export default class Navigation extends Component {
  
  render() {
    return (
      <nav className="navigation">
        <div>
        <Fetch
          url="https://vefforritun2-2018-v4-synilausn.herokuapp.com/"
          render={({ loading, error, data}) => {
            if (loading) {
              return (<div>Sæki slodir...</div>);
            }

            if (error) {
              return (<div>Villa við að sækja slodir</div>);
            }

            return (
              <section>
                <h2>Slodir</h2>
                {data.schools.map((item, i) => (
                  <li key={i}><NavLink to={`/${item.slug}`}>{item.name}</NavLink></li>
                ))}
              </section>
            );
          }}
        />
      </div>
      </nav>
    );
  }
}
