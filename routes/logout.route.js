const logoutController = require('../controller/logout.controller')

const router = require('express').Router();

router.all('/', logoutController.logOut)