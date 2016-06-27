var express = require('express'),
    dataPost     = require('../controllers/datapost'),
    findData = require('../controllers/finddata'),
    deleteData  = require('../controllers/deletedata'),
    initData    = require('../controllers/initdata'),
    index    = require('../controllers/index'),
    router   = express.Router();


router.route('/').get(index)
                 .post(dataPost);
router.route('/initmind').get(initData);
router.route('/data/:id').delete(deleteData);
router.route('/findData').post(findData);

module.exports = router;
