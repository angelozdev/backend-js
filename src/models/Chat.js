const { Schema, model } = require('mongoose')

const Chat = new Schema({
    users: [
        {
            type: Schema.ObjectId,
            ref: 'User'
        }
    ]
})

module.exports = model('Chat', Chat, 'chats')