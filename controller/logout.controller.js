
exports.logOut = (req, res) => {

    req.session.destroy(() => {
        res.redirect('/');
    })
}