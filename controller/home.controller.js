const productsModel = require('../model/products.model');


exports.gethome = (req, res) => {
    if (req.session.userId) {
        console.log("."); console.log("."); console.log("."); console.log("."); console.log(".");
        console.log(req.session.userId);
    } else {
        console.log('notAuth')
    }

    let q = req.query.category;
    // console.log(q);
    if (q == undefined || q == 'all') {

        productsModel.getAllProducts().then((products) => {
            console.log(req.query.category)
            res.render('index', {
                products: products,
                userid: req.session.userId,
                isAdmin: req.session.isAdmin,
                category: req.query.category
            })
        })
    } else if (q) {
        console.log(q)
        productsModel.getProductsByCategory(q).then((products) => {
            res.render('index', {
                products: products,
                userid: req.session.userId,
                isAdmin: req.session.isAdmin,
                category: req.query.category
            });
        })
    }


}