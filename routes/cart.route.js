const router = require('express').Router();
const bodyParser = require('body-parser');
const check = require('express-validator').check;



const cartController = require('../controller/cart.controller')

router.get('/', cartController.getcarts);

router.post('/',
    bodyParser.urlencoded({ extended: true }),
    check('amount').not().isEmpty().withMessage('amount is required')
        .isInt({ min: 1 }).withMessage('amount must be grater than 0'),
    cartController.postCart);


router.post('/edit', bodyParser.urlencoded({ extended: true }), cartController.editCart)
router.post('/remove', bodyParser.urlencoded({ extended: true }), cartController.removeCart)


module.exports = router;