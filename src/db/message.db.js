const Message = require('../models/Message')

const log = console.log;
const chalk = require('chalk');
const err = chalk.bold.bgRed;
const success = chalk.bgBlueBright.black;

const addMessage = (message) => {
    new Message(message)
        .save()
        .then(() => log(success('[MessageDB] Message Created')))
        .catch(error => log(err(error)))
}

const getMessages = (filterByUser) => {
    return new Promise((resolve, reject) => {
        let filter = {}
        if(filterByUser){
            filter = { user: filterByUser }
        }
        Message.find(filter)
            .populate('user')
            .exec((err, populated) => {
                if(err){
                    return reject(err)
                }
                resolve(populated)
            })
    })
}

const updateMessage = (id, message) => {
    Message.findByIdAndUpdate(id, { message })
        .then(() => log(success('[MessageDB] Message Updated')))
        .catch(error => log(error(error)))
}

const removeMessage = (id) => {
    Message.findByIdAndDelete(id)
        .then(() => log(success('[MessageDB] Message Deleted')))
        .catch((error) => log(err(error)))
}

module.exports = {
    add   : addMessage,
    get   : getMessages,
    update: updateMessage,
    remove: removeMessage
}