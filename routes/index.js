var express = require('express');
var router = express.Router();


router.use('/province', require('./province'));
router.use('/church', require('./church'));


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});




module.exports = router;