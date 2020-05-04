


exports.isauth_denay = (req, res, next) => {
    if (req.session.userId) {
        console.log('from auth cont is user ' + req.session.userId)
        res.redirect('/')
    } else {
        console.log('from auth cont not user ' + req.session.userId)
        next()
    }


}

exports.isauth_Enter = (req, res, next) => {
    if (req.session.userId) {
        console.log('from auth cont is user ' + req.session.userId)
        next()
    } else {
        console.log('from auth cont not user ' + req.session.userId)
        res.redirect('/')
    }


}
