const db = require('../db/message.db')

/* Console */
const log = console.log;
const chalk = require('chalk');
const err = chalk.bold.bgRed;

const addMessage = (user, message) => {
    return new Promise((resolve, reject) => {
        if(!user || !message){
            log(err('[MessageController] No hay usuario o mensaje'))
            return reject('Message Incorrect')
        }
        db.add({ user, message })
        resolve({ user, message })
    })
}

const getMessages = (filterByUser) => {
    return new Promise((resolve, reject) => {
        resolve(db.get(filterByUser))
    })
}

const updateMessage = (id, message) => {
    return new Promise((resolve, reject) => {
        if(!id || !message){
            log(err('[MessageController] No hay id o mensaje'))
            return reject('Message Incorrect')
        }
        resolve(db.update(id, message))
    })
}

const removeMessage = (id) => {
    return new Promise((resolve, reject) => {
        if(!id){
            log(err('[MessageController] No hay ID'))
            return reject('Delete Incorrect')
        }

        resolve(db.remove(id))
    })
}


module.exports = {
    addMessage,
    getMessages,
    updateMessage,
    removeMessage
}