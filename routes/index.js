var express = require('express');
var router = express.Router();


router.use('/province', require('./province'));
router.use('/church', require('./church'));
router.use('/registeruser', require('./userregister'));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});




module.exports = router;