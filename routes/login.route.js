
const loginController = require('../controller/login.controller')
const router = require('express').Router();
const bodyParser = require("body-parser");

router.get('/', loginController.getVeiw);

router.post('/', bodyParser.urlencoded({ extended: true }), loginController.login)

module.exports = router;