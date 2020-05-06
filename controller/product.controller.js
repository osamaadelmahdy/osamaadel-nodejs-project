const productsModel = require('../model/products.model')

exports.getProduct = (req, res) => {
    let id = req.params.id;
    productsModel.getProductById(id).then((product) => {
        res.render('product', {
            product: product,
            userid: req.session.userId
        })
    })
}