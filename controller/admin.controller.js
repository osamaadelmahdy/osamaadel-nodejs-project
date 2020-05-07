const productsModel = require('../model/products.model');
const cartModel = require('../model/cart.model');

exports.getView = (req, res, next) => {
    res.render('addproduct', {
        userid: req.session.userId,
        isAdmin: req.session.isAdmin
    });
}

exports.addProuduct = (req, res, next) => {
    productsModel.addProduct(req).then((i) => {
        console.log("product added ", i)
        res.redirect('/')
    })
}

exports.getOrdersView = (req, res) => {
    cartModel.getCartToAdmin().then((data, id) => {
        res.render('orders', {
            cart: data,
            usersId: id,
            userid: req.session.userId,
            isAdmin: req.session.isAdmin
        })
    })

}