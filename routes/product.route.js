
const productController = require('../controller/product.controller')
const router = require('express').Router();

router.get('/', (req, res) => {
    res.redirect('./');
})

router.get("/:id", productController.getProduct);


module.exports = router;