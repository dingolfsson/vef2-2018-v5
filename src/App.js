import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Route, Link, NavLink, Switch } from 'react-router-dom'

import './App.css';

import Home from './components/home';
import School from './components/school';
import Navigation from './components/navigation';
import NotFound from './components/not-found';

class App extends Component {
  render() {

    return (
      <main className="app">
      <p><NavLink to="/">Heim</NavLink></p>
        <section>
          <Navigation />
        </section>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/School" component={School} />
            <Route path="/:slug" component={Navigation} />
            <Route component={NotFound} />
          </Switch>
      </main>
    );
  }
}

export default App;
