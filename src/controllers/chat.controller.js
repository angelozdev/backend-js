const db = require('../db/chat.db')

const addChat = (users) => {
    return new Promise((resolve, reject) => {
        if(!Array.isArray(users)){
            console.error('[ChatController] No es un array');
            return reject('ERROR to add chat')
        }
        if(!users.length === 0){
            console.error('[ChatController] No hay usuarios');
            return reject('ERROR to add chat')
        }
        resolve(db.add({ users }))
    })
}
const getChats = (userId) => {
    return new Promise((resolve, reject) => {
        resolve(db.get(userId))
    })
}


module.exports = {
    addChat,
    getChats
}