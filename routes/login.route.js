
const loginController = require('../controller/login.controller')
const router = require('express').Router();

router.get('/', loginController.getProduct);

module.exports = router;