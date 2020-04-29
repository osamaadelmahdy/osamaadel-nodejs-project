
const userModel = require('../model/user.model')

exports.veiwPage = (req, res) => {
    res.render('signup')
}

exports.creatUser = ((req, res) => {
    userModel.signUp(req.body)
        .then((data) => {
            console.log(data);
            res.redirect('login')
        }).catch((err) => {
            console.log(err)
            res.redirect('signup')
        })


})