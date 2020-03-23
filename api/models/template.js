var mongoose = require('mongoose')

var fontStyleSchema = new mongoose.Schema({
    fontFamily: String,
    fontSize: Number,
    align: String,
    fill: Number,
    wordWrap: Boolean,
    wordWrapWidth: Number
})

var cardElementSchema = new mongoose.Schema({
    type: String,
    data: String,
    x: String,
    y: String,
    width: String,
    height: String,
    anchor: {
        x: Number,
        y: Number
    },
    background: Number,
    fontStyle: fontStyleSchema
})

cardElementSchema.add({
    layout: {
        type: Map,
        of: cardElementSchema
    }
})

var templateSchema = new mongoose.Schema({
    name: String,
    game: String,
    width: String,
    height: String,
    background: Number,
    fields: {
        type: Array,
        of: String
    },
    layout: {
        type: Map,
        of: cardElementSchema
    }
})

module.exports = mongoose.model("templates", templateSchema)