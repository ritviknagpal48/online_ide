import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Navbar from './components/Navbar';
import Textbox from './components/Textbox';
import axios from 'axios';

const App = () => {
  return (
    <Router>
      <div className='App #00695c teal darken-3'>
        <Navbar />

        <div className='container'>
          <Switch>
            <Route exact path='/' />
          </Switch>
        </div>
        <Textbox />
      </div>
    </Router>
  );
};

export default App;
