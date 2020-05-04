
const loginController = require('../controller/login.controller')
const router = require('express').Router();
const bodyParser = require("body-parser");
const authcontroller = require('../controller/auth.controller');


router.get('/', authcontroller.isauth_denay, loginController.getVeiw);

router.post('/', bodyParser.urlencoded({ extended: true }), loginController.login)

module.exports = router;