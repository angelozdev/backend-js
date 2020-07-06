const db = require('../db/user.db')

/* Console */
const log = console.log;
const chalk = require('chalk')
const error = chalk.bgRed.black

const getUsers = (filterByName) => {
    return new Promise((resolve, reject) => {
        resolve(db.get(filterByName))
    })
}

const addUser = (name, email) => {
    return new Promise((resolve, reject) => {
        if(!name || !email){
            log(error('[UserController] No hay nombre o email'));
            return reject('User Error')
        }
        resolve(db.add({ name, email }))
    })
}

module.exports = {
    getUsers,
    addUser
}