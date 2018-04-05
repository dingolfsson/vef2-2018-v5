import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Route, Link, NavLink, Switch } from 'react-router-dom'

import './App.css';

import Navigation from './components/navigation';
import NotFound from './components/not-found';

class App extends Component {

  render() {

    return (
      <main className="app">
        <Helmet defaultTitle="Forsíða">
          Próftöflur
        </Helmet>
        <h1>Próftöflur</h1>
        <div className="test">
          <Navigation />
        </div>

        <p><NavLink to="/">Heim</NavLink></p>

      </main>
    );
  }

}

export default App;
