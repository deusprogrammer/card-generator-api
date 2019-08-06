var express = require('express')
var router = express.Router()
var Templates = require('../models/template')

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
    // .put((request, response) => {

    // })
    // .delete((request, response) => {
        
    // })

module.exports = router