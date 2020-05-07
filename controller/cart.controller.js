
const cartModel = require('../model/cart.model');
const validationResult = require('express-validator').validationResult;

exports.getcarts = (req, res) => {
    cartModel.getcart(req.session.userId).then((cart) => {
        console.log(cart)
        res.render('cart', { cart: cart, userid: req.session.userId, isAdmin: req.session.isAdmin });
    })
}

exports.postCart = (req, res) => {

    if (validationResult(req).isEmpty()) {
        cartModel.addNewItem({
            name: req.body.name,
            price: req.body.price,
            image: req.body.image,
            amount: req.body.amount,
            userId: req.session.userId,
            productId: req.body.productId,
            timestamp: Date.now()
        }).then(() => {
            console.log('cart added');
            res.redirect('/')
        }).catch((err) => console.log('post cart', err));
    } else {
        console.log('error post cart')
    }


}

exports.editCart = (req, res) => {
    cartModel.edit(req.body).then(() => {
        res.redirect('/cart')
    }).catch((err) => "edit error" + err)

}
exports.removeCart = (req, res) => {
    cartModel.remove(req.body).then(() => {
        res.redirect('/cart')
    })
}



