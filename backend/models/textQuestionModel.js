const mongoose = require('mongoose');

const textQuestionSchema = new mongoose.Schema({
	question: {
		type: String,
		required: [true, 'Question is required']
	}
});

module.exports = mongoose.model("TextQuestion", textQuestionSchema);