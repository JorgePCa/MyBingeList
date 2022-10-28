const users = require('./users');
const media = require('./media');
const statusW = require('./statusW');
const type = require('./type');
const category = require('./category');
const userMedia = require('./userMedia');

module.exports = api => {
  app.use('/users', users);
  app.use('/media', media);
  app.use('/statusW', statusW);
  app.use('/type', type);
  app.use('/category', category);
  app.use('/userMedia', userMedia);
};