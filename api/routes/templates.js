var express = require('express')
var router = express.Router()
var Templates = require('../models/template')
var Cards = require('../models/card')

router.route("/")
    .get((request, response) => {
        Templates.find({}, (error, results) => {
            if (error) {
                response.send(error)
                return
            }

            response.json(results)
        })
    })
    .post((request, response) => {
        Templates.create(request.body, (error, results) => {
            if (error) {
                response.send(error)
                return
            }

            response.json(results)
        })
    })

router.route("/:id")
    .get((request, response) => {
        Templates.findById(request.params.id, (error, results) => {
            if (error) {
                response.send(error)
                return
            }

            response.json(results)
        })
    })

router.route("/:id/cards")
.get((request, response) => {
    Cards.find({template: request.params.id}, null, {sort: {name: 1}}, (error, results) => {
        if (error) {
            response.send(error)
            return
        }

        response.json(results)
    })
})

module.exports = router