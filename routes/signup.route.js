
const signupController = require('../controller/signup.controller')
const router = require('express').Router();
const bodyParser = require('body-parser');

router.get('/', signupController.veiwPage);

router.post('/',
    bodyParser.urlencoded({ extended: true }),
    signupController.creatUser);

module.exports = router;