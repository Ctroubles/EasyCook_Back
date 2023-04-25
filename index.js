const server = require('./src/app.js');
// const { conn } = require('./src/db.js');

// Syncing all the models at once.

console.log("llegó a index.js")

  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
