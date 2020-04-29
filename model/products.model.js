const mongoose = require('mongoose');

const db_url = 'mongodb://localhost:27017/online-shop';

const productSchema = mongoose.Schema({
    name: String,
    image: String,
    price: Number,
    description: String,
    category: String

})

const product = mongoose.model('produst', productSchema);



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
            product.find({ name: q }).then((products) => {
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

