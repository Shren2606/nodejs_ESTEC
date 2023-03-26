
const newsRouter = require('./news');
const siteRouter = require('./site');
const estecRouter = require('./estec');

function route(app){

  app.use('/news', newsRouter);

  app.use('/estec',estecRouter);

  app.use('/',siteRouter);

}

module.exports = route;
