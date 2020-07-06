const express = require('express');
const app = express();
const morgan = require('morgan')
const path = require('path')



// Settings
app.set('port', 3000)
app.set('views', path.join(__dirname, 'views'))

// Middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false })) /* Para enviar datos desde un form */

// Global Variables

// Routes
app.use(require('./routes/message.routes'));

// Static Files
app.use(express.static(path.join(__dirname, 'public')))

module.exports = app;