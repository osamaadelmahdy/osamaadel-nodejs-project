const mongoose = require('mongoose');


const db_url = 'mongodb://localhost:27017/online-shop';

const cartSchema = mongoose.Schema({
    name: String,
    price: Number,
    amount: Number,
    userId: String,
    productId: String,
    timestamp: Number

})

const cartItem = mongoose.model('cart', cartSchema);

exports.addNewItem = data => {
    return new Promise((resolve, reject) => {
        mongoose.connect(db_url)
            .then(() => {
                console.log("connect to cart data 'add new item'")
                let item = new cartItem(data);
                item.save()
                    .then((cartadded) => {
                        console.log("cart added ", cartadded)
                        mongoose.disconnect();
                        resolve(cartadded);
                    }).catch((err) => {
                        mongoose.disconnect();
                        reject(err);
                    })
            }).catch((err) => {
                mongoose.disconnect();
                reject(err);;
            })
    })
}


exports.getcart = id => {
    return new Promise((resolve, reject) => {
        mongoose.connect(db_url)
            .then(() => {
                console.log("connect to cart data 'get card'")
                cartItem.find({ userId: id })
                    .then((carts) => {
                        console.log("cart added ", carts)
                        mongoose.disconnect();
                        resolve(carts);
                    }).catch((err) => {
                        mongoose.disconnect();
                        reject(err);;
                    })
            }).catch((err) => {
                mongoose.disconnect();
                reject(err);;
            })
    })
}
