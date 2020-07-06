const mongoose = require('mongoose');
require('dotenv').config();

const log = console.log;
const chalk = require('chalk');
const success = chalk.black.bgGreenBright;
const err = chalk.bold.bgRed;

const MONGODB_URL = process.env.MONGODB_URL;

mongoose.connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
})
    .then(() => log(success('[DB] Connected')))
    .catch(error => log(err(error)))