const mongoose = require('mongoose');
const dotenv = require('dotenv');
const DBDriver = require('./helpers/DBDriver');

process.on('uncaughtException', err => {
  console.log(err);
  process.exit(1);
});

dotenv.config({ path: `${__dirname}/config.env` });

const dbDriver = new DBDriver(process.env);
const DB = dbDriver.conn();

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(res => {
    console.log('DB OK');
  });

const app = require('./app');

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`now running on ${port}`);
});

process.on('unhandledRejection', err => {
  console.log(err);
  server.close(() => {
    process.exit(1);
  });
});
