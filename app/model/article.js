var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
	title: String,
	author: String,
	body: String,
	comments: [{
		body: String,
		date: Date
	}],
	date: {
		type: Date,
		default: Date.now
	},
	hidden: Boolean
});

module.exports = mongoose.model('Article', ArticleSchema);
