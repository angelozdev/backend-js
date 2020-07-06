const { Router } = require('express');
const router = Router();

const log = console.log;
const chalk = require('chalk');
const error = chalk.bold.bgRed;

const {
    addMessage,
    getMessages,
    updateMessage,
    removeMessage
} = require('../controllers/message.controller')


router.get('/', (req, res) => {
    const filterByUser = req.query.user || null;
    getMessages(filterByUser)
        .then((messages) => res.send(messages))
        .catch(err => {
            log(error(err))
            res.send('ERROR to get messages')
        })
})
router.post('/', (req, res) => {
    const { user, message } = req.body;
    addMessage(user, message)
        .then(data => res.send('Sended!'))
        .catch(err => res.send('ERROR to send'))

})

router.patch('/:id', (req, res) => {
    updateMessage(req.params.id, req.body.message)
        .then(() => res.send('Updated!'))
        .catch(err => {
            log(error(err))
            res.send(`ERROR to update message`)
        })
})

router.delete('/:id', (req, res) => {
    console.log(req.params.id);
    removeMessage(req.params.id)
        .then(() => res.send(`Message id: ${req.params.id} deleted!`))
        .catch(err => {
            log(error(err))
            res.send('ERROR to delete message')
        })
})

module.exports = router;