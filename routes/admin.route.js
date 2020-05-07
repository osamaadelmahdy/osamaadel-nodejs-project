const router = require('express').Router();
const multer = require('multer');

const adminController = require('../controller/admin.controller')

router.get('/add', adminController.getView)

router.post('/add',
    multer({
        storage: multer.diskStorage({
            destination: (req, file, cb) => {
                cb(null, 'assets/img')
            },
            filename: (req, file, cp) => {
                cp(null, Date.now() + "-" + file.originalname)
            }
        })
    }).single('image'), adminController.addProuduct)

router.get('/manage', adminController.getOrdersView)

module.exports = router;