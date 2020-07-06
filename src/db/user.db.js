const User = require('../models/User');

/* Console */
const log = console.log;
const chalk = require('chalk')
const error = chalk.bgRed.black
const success = chalk.bgBlue.black

const getUsers = async (filterByName) => {
    let filter = {}
    if(filterByName){
        filter = { name: filterByName }
    }
    return await User.find(filter)
}

const addUser = (user) => {
    new User(user)
        .save()
        .then(() => log(success('User Added')))
        .catch(err => log(error(err)))
}

module.exports = {
    get: getUsers,
    add: addUser
}