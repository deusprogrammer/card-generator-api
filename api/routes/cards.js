var express = require('express')
var router = express.Router()
var Cards = require('../models/card')

router.route("/")
    .get((request, response) => {
        Cards.find({}, null, {sort: {template: 1, name: 1}}, (error, results) => {
            if (error) {
                response.send(error)
                return
            }

            response.json(results)
        })
    })
    .post((request, response) => {
        Cards.create(request.body, (error, results) => {
            if (error) {
                response.send(error)
                return
            }

            response.json(results)
        })
    })

router.route("/:id")
    .get((request, response) => {
        Cards.findById(request.params.id, (error, results) => {
            if (error) {
                response.send(error)
                return
            }

            response.json(results)
        })
    })
    // .put((request, response) => {

    // })
    // .delete((request, response) => {
        
    // })

module.exports = router