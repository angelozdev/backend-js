const { Schema, model } = require('mongoose');

const Message = new Schema({
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    message: {
        type: String,
        required: true
    }
},
{
    timestamps: true
})



module.exports = model('Message', Message, 'messages')