
const router = require('express').Router();
const homeController = require('../controller/home.controller');

router.get("/", homeController.gethome);

module.exports = router;