const express = require('express')
const router = express.Router()
const { postResume } = require("../controllers/candidate-controller")
const { candidateValidation } = require("../validators/candidate-validator")

//POST / - To create profile with resume
router.post('/', candidateValidation,postResume)

module.exports = router