import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Department.css';

/**
 * Þessi component ætti að vera einfaldur í birtingu en taka fall frá foreldri
 * sem keyrir þegar smellt er á fyrirsögn.
 */

export default class Exams extends Component {

  render() {
    const { onHeaderClick, title, visible, data, test } = this.props;
    const plus = visible ? '- ' : '+ ';
    return (
      <section className="department">
        <li onClick={onHeaderClick} >{plus}{data.heading}</li>
        {visible && (
          <div>

            <table>
              <thead>
                <tr>
                  <th>Auðkenni</th>
                  <th>Námskeið</th>
                  <th>Fjöldi</th>
                  <th>Dagsetning</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(data.tests).map((ele, i) => (
                  <tr key={i}>
                    <td>{data.tests[i].course} </td>
                    <td>{data.tests[i].name} </td>
                    <td>{data.tests[i].students} </td>
                    <td>{data.tests[i].date} </td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>
        )}
      </section>
    );
  }
}