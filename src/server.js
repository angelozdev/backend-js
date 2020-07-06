const express = require('express');
const app = express();
const morgan = require('morgan')
const path = require('path')



// Settings
app.set('port', 3000)

// Middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false })) /* Para enviar datos desde un form */

// Global Variables

// Routes
app.use(require('./routes/message.routes'));
app.use(require('./routes/user.routes'));
app.use(require('./routes/chat.routes'))

// Static Files
// app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;