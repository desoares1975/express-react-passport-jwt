import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home';
import loginForm from './login-form';


const Router = () => {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={loginForm} />
      </Switch>
    </main>
  );
};

export default Router;