const Chat = require('../models/Chat');
const { populate } = require('../models/Chat');

const getChat = (userId) => {
    return new Promise((resolve, reject) => {
        let filter = {}
        if(userId){
            filter = { users: [{ _id: userId }] }
        }
        Chat.find(filter)
        .populate('users')
        .exec((err, populated) => {
            if(err){
                return reject(err)
            }
            resolve(populated)
        })
    })
}

const addChat = (users) => {
    new Chat(users).save()
        .then(() => console.log('Chat Added'))
        .catch(err => console.error(err))

}

module.exports = {
    get: getChat,
    add: addChat
}