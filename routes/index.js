// ./routes/index.js
const users = require('./users');
const media = require('./media');
const statusW = require('./statusW');
const type = require('./type');
const category = require('./category');
const userMedia = require('./userMedia');
// const photos = require('./photos');

module.exports = app => {
  app.use('/users', users);
  app.use('/media', media);
  app.use('/statusW', statusW);
  app.use('/type', type);
  app.use('/category', category);
  app.use('/userMedia', userMedia);
};