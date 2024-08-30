const mongoose = require('mongoose')
const schema = mongoose.Schema

const candidate = new schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    resume: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Candidate', candidate)