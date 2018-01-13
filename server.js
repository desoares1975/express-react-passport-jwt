'use strict';
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const passportJWT = require('passport-jwt');
const Strategy = passportJWT.Strategy;
const ExtractJwt = passportJWT.ExtractJwt;
const User = require('./models/user');

passport.use(new Strategy({
  'secretOrKey': process.env.JWT_SECRET,
  'jwtFromRequest': ExtractJwt.fromAuthHeaderAsBearerToken()
}, (jwtPayload, next) => {
  User.findById(jwtPayload.id)
  .then(user => {
    if (!user) {
      next(null, false);
    }

    next(null, user);
  })
  .catch(e => {
    next(e);
  });
}));

const app = express();
app.use(passport.initialize());
app.use(bodyParser.urlencoded({'extended': true}));
app.use(bodyParser.json());
require('./models');
app.post('/login', (req, res) => {
    User.findOne({'username': req.body.username, 'password': req.body.password})
    .then(user => {
      if(!user) {
        return res.status(401).json('Unauthorized.');
      }

      res.status(200).json({'token': jwt.sign({'id': user._id, 'password': user.password}, process.env.JWT_SECRET)});
    })
    .catch(e => res.status(500).json(e));
});
app.get('/secret', passport.authenticate('jwt', {'session': false}, (req, res) => {
  res.json('ok');
}));
app.use(express.static(`${__dirname}/public/static`));
app.listen(4444, () => {
  console.log('App up on 4444');
});