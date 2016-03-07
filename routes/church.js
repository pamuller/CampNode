//to call use http://localhost:3000/company

var express = require('express');
var router = express.Router();
//var db = require("../orientDBConfig.js");

var church= require("../models/ChurchModel");
//var campuser= require("../models/UserModel");

/* GET users listing. */
router.get('/findAll', function(req, res, next) {


	var users = church.findall(res,req);
	console.log('active users', users);
	//res.send(users);


	/*db.select().from('Company').all()
	.then(function (users) {
		console.log('active users', users);
	  res.send(users);
	});*/


});


router.post('/add', function(req, res, next) {

	var users = church.add(res,req);
	console.log('active users', users);
});


router.post('/Churchlist', function(req, res, next) {


	var users = church.findall(res,req);
	console.log('active users', users);
	//res.send(users);


	/*db.select().from('Company').all()
	.then(function (users) {
		console.log('active users', users);
	  res.send(users);
	});*/


});


router.post('/addChurch', function(req, res, next) {


	var users = church.add(res,req);
	console.log('active users', users);
	//res.send(users);


	/*db.select().from('Company').all()
	.then(function (users) {
		console.log('active users', users);
	  res.send(users);
	});*/


});



router.post('/deleteChurch', function(req, res, next) {


	var users = church.delete(res,req);
	console.log('active users', users);
	//res.send(users);


	/*db.select().from('Company').all()
	.then(function (users) {
		console.log('active users', users);
	  res.send(users);
	});*/


});









router.put('/add', function(req, res, next) {

	var users = church.update(res,req);
	console.log('active users', users);





});




/*router.delete('/add/:id', function(req, res, next) {

	var users = church.deleteRecord(res,req);
	//console.log('active users', users);




});*/




module.exports = router;