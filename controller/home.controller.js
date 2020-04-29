const productsModel = require('../model/products.model');


exports.gethome = (req, res) => {

    let q = req.query.category;
    console.log(q);
    if (q == undefined || q == 'all') {

        productsModel.getAllProducts().then((products) => {
            res.render('index', {
                products: products
            })
        })
    } else if (q) {
        productsModel.getProductsByCategory(q).then((products) => {
            res.render('index', { products: products });
        })
    }


}