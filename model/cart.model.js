const mongoose = require('mongoose');
const userModel = require('../model/user.model');


const db_url = 'mongodb://localhost:27017/online-shop';

const cartSchema = mongoose.Schema({
    name: String,
    price: Number,
    image: String,
    amount: Number,
    status: {
        type: String,
        default: "ordered"
    },
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
ids = [];
usersIds = [];
exports.getCartToAdmin = data => {
    return new Promise((resolve, reject) => {
        mongoose.connect(db_url)
            .then(() => {
                console.log("connect to cart data 'getCartToAdmin'")
                cartItem.find({})
                    .then((carts) => {
                        console.log(carts);
                        carts.forEach(element => {
                            ids.push(element.userId);
                        });
                        console.log(ids);
                        for (let i = 0; i < ids.length; i++) {
                            if (ids[i] == ids[i - 1]) { } else {
                                usersIds.push(ids[i])
                            }
                        }
                        console.log(usersIds);
                        userModel.findIds(usersIds).then((usersId) => {
                            console.log("getCartToAdmin ", carts)
                            mongoose.disconnect();
                            resolve(carts, usersId);
                        })
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

exports.remove = data => {
    return new Promise((resolve, reject) => {
        mongoose.connect(db_url)
            .then(() => {
                console.log("connect to cart data 'edit card'")
                cartItem.findOneAndRemove({ _id: data.id })
                    .then((carts) => {
                        console.log("cart removed ", carts)
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

exports.editStatus = (id, stutas) => {
    return new Promise((resolve, reject) => {
        mongoose.connect(db_url)
            .then(() => {
                cartItem.findByIdAndUpdate({ _id: id }, { status: stutas })
                    .then((carts) => {
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



