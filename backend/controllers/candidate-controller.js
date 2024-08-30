const Candidate= require("../models/candidate-model")

exports.postResume = async(req, res, next) => {
    try {
        const { name, email, phone, location, resume } = req.body
        const candidate = await Candidate.create({
            name, 
            email,
            phone,
            location, 
            resume
        })
        res.status(200).json({ candidate })
    }
    catch(err){
        next(err)
    }
}