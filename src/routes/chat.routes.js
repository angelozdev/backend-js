const { Router } = require('express')
const router = Router();

const {
    addChat,
    getChats
} = require('../controllers/chat.controller');

router.get('/chat/:userId', (req, res) => {
    getChats(req.params.userId)
        .then((data) => res.send(data))
        .catch(err => {
            console.error(err);
            res.send('ERROR to get chat')
        })
})

router.post('/chat', (req, res) => {
    addChat(req.body.users)
        .then(data => res.send(data))
        .catch(err => {
            console.error(err)
            res.send('ERROR to send chat')
        })
})

module.exports = router;