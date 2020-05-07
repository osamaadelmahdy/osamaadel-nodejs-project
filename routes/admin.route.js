const router = require('express').Router();
const multer = require('multer');
const bodyParser = require('body-parser');


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
router.post('/manage/edit', bodyParser.urlencoded({ extended: true }), adminController.editStatus)

module.exports = router;