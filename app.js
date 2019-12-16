var express = require('express')
var mongoose = require('mongoose')
var logger = require('morgan')
var cors = require('cors')

var templatesRouter = require('./api/routes/templates')
var cardsRouter = require('./api/routes/cards')

var app = express()

app.use(logger('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Mongoose instance connection url connection
var databaseUrl = process.env.DB_URL
mongoose.Promise = global.Promise


var connectWithRetry = function() {
    return mongoose.connect(databaseUrl, function(err) {
        if (err) {
            console.warn('Failed to connect to mongo on startup - retrying in 5 sec')
            setTimeout(connectWithRetry, 5000)
        }
    });
};
connectWithRetry()

app.use('/templates', templatesRouter)
app.use('/cards', cardsRouter)

module.exports = app