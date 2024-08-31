const { body } = require("express-validator")
const { handleValidationErrors } = require("./handleValidationErrors")

exports.candidateValidation = [
  body('name').trim().notEmpty().withMessage('Name is required').bail().isLength({ min: 2, max: 50 }).withMessage('Name must be between 2 and 50 characters'),
  body("email").notEmpty().withMessage("Email is required").bail().isEmail().withMessage("Invalid Email").normalizeEmail(),
  body('phone').notEmpty().withMessage('Phone number is required').bail().isMobilePhone().withMessage('Invalid phone number format'),
  body('location').trim().notEmpty().withMessage('Location is required').bail().isLength({ min: 2, max: 100 }).withMessage('Location must be between 2 and 100 characters'),
  body('resume').notEmpty().withMessage('Resume URL is required').bail().isURL().withMessage('Invalid URL format for resume'),
  handleValidationErrors
]