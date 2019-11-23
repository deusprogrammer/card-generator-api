var mongoose = require('mongoose')

var cardSchema = new mongoose.Schema({
    templateHref: String,
    name: String,
    data: Map
})

module.exports = mongoose.model("cards", cardSchema)