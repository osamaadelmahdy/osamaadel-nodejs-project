const userModel = require('../model/user.model');

exports.getVeiw = (req, res) => {

    res.render('login', {
        authErr: req.flash('authErr')[0],
        userid: req.session.userId,
        isAdmin: req.session.isAdmin
    })
}

exports.login = (req, res) => {
    console.log("login controller");
    userModel.logIn(req.body)
        .then((data) => {

            req.session.userId = data._id;
            req.session.isAdmin = data.isAdmin;
            console.log('session id ' + req.session.userId, 'isAdmin', req.session.isAdmin);
            res.redirect('/')
        }).catch((err) => {
            req.flash("authErr", "from flash error ya rayeq " + err)
            console.log(err)
            res.redirect('login')

        })

}


