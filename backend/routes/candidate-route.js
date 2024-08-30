const express = require('express')
const router = express.Router()
const { postResume } = require("../controllers/candidate-controller")

//POST /
router.post('/', postResume)

module.exports = router