const mongoose = require('mongoose');

const db_url = 'mongodb://localhost:27017/online-shop';

const productSchema = mongoose.Schema({
    name: String,
    image: {
        type: String,
        default: this.name
    },
    price: Number,
    description: String,
    category: String

})

const product = mongoose.model('produst', productSchema);


exports.addProduct = (productData) => {
    return new Promise((resolve, reject) => {
        mongoose.connect(db_url).then(() => {
            console.log("add product connect to database...")
            let p = new product({
                name: productData.body.name,
                image: productData.file.filename,
                price: productData.body.price,
                description: productData.body.description,
                category: productData.body.category
            }).save().then((products) => {
                mongoose.disconnect();
                resolve(products);
            })
        }).catch((err) => {
            reject(err);
        });
    })

}

exports.getAllProducts = () => {
    return new Promise((resolve, reject) => {
        mongoose.connect(db_url).then(() => {
            console.log("connect to database...")
            product.find({}).then((products) => {
                mongoose.disconnect();
                resolve(products);
            })
        }).catch((err) => {
            reject(err);
        });
    })

}
exports.getProductsByCategory = (q) => {
    return new Promise((resolve, reject) => {
        mongoose.connect(db_url).then(() => {
            product.find({ category: q }).then((products) => {
                mongoose.disconnect();
                resolve(products);
            })
        }).catch((err) => reject("error ", err))
    })
}

exports.getProductById = (id) => {
    return new Promise((resolve, reject) => {
        mongoose.connect(db_url).then(() => {
            product.findById(id).then((products) => {
                mongoose.disconnect();
                resolve(products);
            })
        }).catch((err) => reject("error ", err))
    })
}

