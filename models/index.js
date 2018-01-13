'use strict';

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

function connect() {
  mongoose.connect(`mongodb://${process.env.MONGO_HOST}/${process.env.MONGO_DB}`, () => {});
}

mongoose.on('connect', () => {
  console.log(`mongoose connected on mongodb://${process.env.MONGO_HOST}/${process.env.MONGO_DB}`);
});

mongoose.on('error', err => {
  console.log(err);
});

mongoose.on('disconnect', () => {
  connect();
});

connect();