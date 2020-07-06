const { Router } = require('express');
const router = Router();

/* Console */
const log = console.log;
const chalk = require('chalk')
const error = chalk.bgRed.black
const success = chalk.bgBlue.black

const {
    getUsers,
    addUser
} = require('../controllers/user.controller')

router.get('/users', (req, res) => {
    getUsers(req.query.name)
        .then(data => res.send(data))
        .catch(err => {
            log(error(err));
            res.send('ERROR to get Users')
        })
})

router.post('/user/new', (req, res) => {
    const { name, email } = req.body;
    addUser(name, email)
        .then(() => res.send('User Added'))
        .catch(err => {
            log(error(err))
            res.send('ERROR')
        })
})

module.exports = router;