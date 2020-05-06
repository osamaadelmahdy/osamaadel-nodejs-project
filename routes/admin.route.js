const router = require('express').Router();
const bodyParser = require('body-parser');
const check = require('express-validator').check;

const adminController = require('../controller/admin.controller')

router.get('/add', adminController.getView)

router.post('/add', bodyParser.urlencoded({ extended: true }), adminController.addProuduct)

router.get('/manage', adminController.getOrdersView)

module.exports = router;