
const signupController = require('../controller/signup.controller')
const router = require('express').Router();
const bodyParser = require('body-parser');
const check = require('express-validator').check

router.get('/', signupController.veiwPage);

router.post('/',
    bodyParser.urlencoded({ extended: true }),
    check('name').not().isEmpty().withMessage('name is empty'),
    check('email').not().isEmpty().withMessage('email is empty').isEmail().withMessage('not email'),
    check('password').isLength({ min: 3 }).withMessage('password most be greter than 3 caracter '),
    check('confirmpassword').custom((value, { req }) => {
        if (value === req.body.password) return true
        else throw new Error('passwords not the same')
    }),
    signupController.creatUser);

module.exports = router;