import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
              return (<div>Sæki gengi...</div>);
            }

            if (error) {
              return (<div>Villa við að sækja gengi</div>);
            }

            return (
              <section>
                <h2>Gengi</h2>
                {data.schools.map((item, i) => (
                  <li key={i}>{item.name} = {item.slug} = {item.link}</li>
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
