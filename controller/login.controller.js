const userModel = require('../model/user.model');

exports.getVeiw = (req, res) => {
    console.log(req.flash('authErr'))
    res.render('login')
}

exports.login = (req, res) => {
    console.log("login c");
    userModel.logIn(req.body)
        .then((data) => {
            req.session.userId = data._id
            console.log(data);
            res.redirect('/')
        }).catch((err) => {
            req.flash("authErr", "from flash error ya rayeq")
            console.log(err)
            res.redirect('login')

        })

}


