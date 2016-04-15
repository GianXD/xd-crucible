// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var classTypes = enum {
			Lord,
			Master,
			Warlord,
			Wizard,
};

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('Character', new Schema({ 
	name: String,
	gender: {type:String, enum:['male', 'female']},
	class: {type:String, enum:classTypes}
	str: Number,
	con: Number,
	dex: Number,
	agi: Number,
	wis: Number,
	int: Number,
	luck: Number,
	
	health: Number,
	mana: Number,
	endurance: Number,

	available: Boolean,

	updated: { type: Date, default: Date.now },

	ObjectID: [Schema.Types.ObjectId]
}));