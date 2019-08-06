var mongoose = require('mongoose')

var fontStyleSchema = new mongoose.Schema({
    fontFamily: String,
    fontSize: Number,
    align: String,
    fill: String,
    wordWrap: Boolean,
    wordWrapWidth: Number
})

var cardElementSchema = new mongoose.Schema({
    type: String,
    x: String,
    y: String,
    width: String,
    height: String,
    anchor: {
        x: Number,
        y: Number
    },
    background: String,
    fontStyle: fontStyleSchema
})

cardElementSchema.add({
    layout: {
        type: Map,
        of: cardElementSchema
    }
})

var templateSchema = new mongoose.Schema({
    width: String,
    height: String,
    layout: {
        type: Map,
        of: cardElementSchema
    }
})

module.exports = mongoose.model("templates", templateSchema)