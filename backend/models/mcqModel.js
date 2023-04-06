const mongoose = require('mongoose');

const mcqSchema = new mongoose.Schema({
	question: {
		type: String,
		required: [true, 'Question is required']
	},
	options: {
		type: [String],
		required: [true, 'Options are required for MCQs'],
		validate: [(val) => 1 < val.length && val.length < 6, 'There must be at least 2 and at most 5 options in a MCQ']
	},
	correctOptionIndex: {
		type: Number,
		required: [true, 'Please specify the correct option'],
        validate: {
            validator: function(val) {
                return (0 <= val) && (val <= (this.options?.length)-1)
            },
            message: `Correct option index must be according to the total number of options.`}
	}
});

module.exports = mongoose.model("MCQ", mcqSchema);