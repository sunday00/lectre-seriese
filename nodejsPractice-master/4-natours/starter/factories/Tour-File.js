const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const DBDriver = require(`../helpers/DBDriver`);

const _model = process.argv[3].split('.')[0];
const model_ = _model[0].toUpperCase() + _model.slice(1).toLowerCase().slice(0, -1);

// eslint-disable-next-line import/no-dynamic-require
const Model = require(`../models/${model_}`);

dotenv.config({ path: `${__dirname}/../config.env` });

const dbDriver = new DBDriver(process.env);
const DB = dbDriver.conn();

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(con => {
    console.log(con.connection);
  });

const models = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/${process.argv[3]}`, 'utf-8')
);

const importData = async () => {
  try {
    await Model.create(models, { validateBeforeSave: false });
    console.log('done\n');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

const deleteData = async () => {
  try {
    await Model.deleteMany();
    console.log('done\n');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}
