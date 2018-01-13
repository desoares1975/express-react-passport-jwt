'use strict';

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

function connect() {
  mongoose.connect(`mongodb://${process.env.MONGO_HOST}/${process.env.MONGO_DB}`, {'useMongoClient': true});
}

mongoose.connection.on('connected', () => {
  console.log(`mongoose connected on mongodb://${process.env.MONGO_HOST}/${process.env.MONGO_DB}`);
});

mongoose.connection.on('error', err => {
  console.log(err);
});

mongoose.connection.on('disconnected', () => {
  connect();
});

connect();