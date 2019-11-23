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

var databaseUrl = "mongodb://localhost/card-db?retryWrites=true" //process.env.CARD_GEN_DB_URL
mongoose.Promise = global.Promise
mongoose.connect(databaseUrl)

app.use('/templates', templatesRouter)
app.use('/cards', cardsRouter)

module.exports = app