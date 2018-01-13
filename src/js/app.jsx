import React from 'react';
import ReactDOM from 'react-dom';
import BrowserRouter from 'react-router-dom';
import Router from './components/routet';

ReactDOM.render((
  <BrowserRouter>
    <Router />
  </BrowserRouter>
), document.getElementById('app'));

