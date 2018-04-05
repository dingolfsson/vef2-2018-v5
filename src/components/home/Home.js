import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import './Home.css';
import { Fetch } from './../school/School';

/* hér ætti að sækja forsíðu vefþjónustu til að sækja stats */

export default class Home extends Component {

  render() {

    return (
      <div className="home">
        <Fetch
          url="https://vefforritun2-2018-v4-synilausn.herokuapp.com/stats"
          render={({ loading, error, data}) => {
            if (loading) {
              return (<div>Sæki gengi...</div>);
            }

            if (error) {
              return (<div>Villa við að sækja gengi</div>);
            }

            return (
              <section>
                <h2>STATS</h2>
                {Object.keys(data.stats).map((item, i) => (
                  <li key={i}>{item} = {data.stats[item]}</li>
                ))}
              </section>
            );
          }}
        />
      </div>
    );
  }
}
