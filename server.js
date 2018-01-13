'use strict';
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const jwt = require('passport-jwt');
const Strategy = jwt.Strategy;
const ExtractJwt = jwt.ExtractJwt;
const User = require('./models/user');

passport.use(new Strategy({
  'secretOrKey': process.env.JWT_SECRET,
  'jwtFromRequest': ExtractJwt.fromAuthHeaderAsBearerToken()
}, (username, password, done) => {
  User.findOne({'username': username, 'password': password})
  .then(user => {
    if(!user) {
      done(null, false);
    }
    done(null, user);
  })
  .catch(e => done(e));
}));