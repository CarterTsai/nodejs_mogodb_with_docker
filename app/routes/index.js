var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var article = require('../model/article.js');

router.get('/', function(req, res, next) {
	article.find(function(err, docs) {
		res.render('index', {
			title: 'Express Test',
			data: docs
		});
	});
});

module.exports = router;
