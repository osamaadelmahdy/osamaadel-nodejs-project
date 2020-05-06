const productsModel = require('../model/products.model');

exports.getView = (req, res, next) => {
    res.render('addproduct', {
        userid: req.session.userId,
        isAdmin: req.session.isAdmin
    });
}

exports.addProuduct = (req, res, next) => {
    productsModel.addProduct(req.body).then((i) => {
        console.log("product added ", i)
        res.redirect('/')
    })
}

exports.getOrdersView = (req, res) => {
    res.render('orders', {
        userid: req.session.userId,
        isAdmin: req.session.isAdmin
    })
}