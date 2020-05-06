
const userModel = require('../model/user.model');
const validationResult = require('express-validator').validationResult;

exports.veiwPage = (req, res) => {
    res.render('signup', {
        validationResult: req.flash('validationResult'),
        userid: req.session.userId,
        isAdmin: req.session.isAdmin
    })
}

exports.creatUser = ((req, res) => {

    if (validationResult(req).isEmpty()) {
        console.log('valdation is empty')
        userModel.signUp(req.body)
            .then((data) => {
                console.log(data);
                res.redirect('login')
            }).catch((err) => {
                console.log(err)
                res.redirect('signup')
            })
    } else {
        console.log('valdation not empty')
        req.flash('validationResult', validationResult(req).errors)
        res.redirect('signup')
    }





})