const mongoose = require('mongoose');

const db_url = 'mongodb://localhost:27017/online-shop';

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String

})

const User = mongoose.model('user', userSchema);



exports.signUp = (userData) => {
    return new Promise((resolve, reject) => {

        mongoose.connect(db_url).then(() => {

            User.findOne({ email: userData.email })
                .then((userInData) => {
                    if (userInData) {
                        reject(userInData.email + " is exist");
                    } else {
                        let u = new User({
                            name: userData.name,
                            email: userData.email,
                            password: userData.password
                        })
                        u.save().then(() => {
                            mongoose.disconnect()
                            resolve(userData.name + ' saved');
                        }
                        );
                    }
                });
        });
    });

}

//login function 
exports.logIn = (userData) => {
    return new Promise((resolve, reject) => {
        mongoose.connect(db_url).then(() => {
            User.findOne({ email: userData.email }).then((userInData) => {
                mongoose.disconnect();
                resolve(userInData);
            }).catch((err) => {
                reject(err);
            })
        })
    });

}