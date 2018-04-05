import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Fetch } from './../school/School';

import './Department.css';

/**
 * Þessi component ætti að vera einfaldur í birtingu en taka fall frá foreldri
 * sem keyrir þegar smellt er á fyrirsögn.
 */

export default class Exams extends Component {

  render() {

    return (
      <section className="department">
        <div>
        <Fetch
          url="https://vefforritun2-2018-v4-synilausn.herokuapp.com/felagsvisindasvid"
          render={({ loading, error, data}) => {
            if (loading) {
              return (<div>Sæki gengi...</div>);
            }

            if (error) {
              return (<div>Villa við að sækja gengi</div>);
            }

            return (
              <section>
                <h2>Felagsvisinda - Slodir</h2>
                {data.school.departments.map((item, i) => (
                  <li key={i}>{item.heading}</li>
                ))}
              </section>
            );
          }}
        />
      </div>
      </section>
    );
  }
}
