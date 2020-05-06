const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const db_url = 'mongodb://localhost:27017/online-shop';

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    isAdmin: {
        type: Boolean,
        default: false
    }

})

const User = mongoose.model('user', userSchema);


// signup function
exports.signUp = (userData) => {
    return new Promise((resolve, reject) => {

        mongoose.connect(db_url).then(() => {

            User.findOne({ email: userData.email })
                .then((userInData) => {
                    if (userInData) {
                        mongoose.disconnect();
                        reject(userInData.email + " is exist");
                    } else {
                        bcrypt.hash(userData.password, 10)
                            .then((pass) => {
                                let realData = new User({
                                    name: userData.name,
                                    email: userData.email,
                                    password: pass
                                }).save().then(() => {
                                    mongoose.disconnect()
                                    resolve(userData.name + ' saved');
                                })
                            }
                            )

                    }
                }).catch(err => {
                    mongoose.disconnect();
                    reject(err);
                });
        }).catch(err => {
            mongoose.disconnect();
            reject(err);
        });
    });

}

//login function 
exports.logIn = (userData) => {
    return new Promise((resolve, reject) => {
        mongoose.connect(db_url).then(() => {
            console.log("connect to db");
            User.findOne({ email: userData.email }).then((userInData) => {
                console.log('find it ');
                bcrypt.compare(userData.password, userInData.password)
                    .then((compare) => {
                        if (compare) {
                            mongoose.disconnect();
                            resolve(userInData);
                            console.log("compare return " + compare)
                        } else {

                            reject('password don\'t match')
                        }
                    }).catch((err) => { reject("compare error " + err) })
            }).catch((err) => { reject("do not find user" + err); })
        })
    });

}

