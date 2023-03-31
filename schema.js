// const mongoose = require('mongoose');

// // mongoose.connect(process.env.DB_URI, {useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex: true,}).then((data) => {
// // 	console.log(`Mongodb connected with server: ${data.connection.host}`)
// // }).catch((err)=>{
// // 	console.log(err);
// // })

// const userSchema = new mongoose.Schema({
// name: { 
// 	type: String,
// 	required: [true, 'Name is required']
// 	},
// email: {
// 	type: String,
// 	required: [true, 'Email is required'],
// 	unique: true,
// 	validate: (value) => {
//      		 return validator.isEmail(value);
//     	} 
// },
// password: {
// 	type: String,
// 	minLength: [6, 'Password should be at least 6 characters long'],
// 	required: [true, 'Password is required'],
// 	 select: false
// },
// role: {
// 	type: String,
// 	enum: ['Admin', 'Teacher']
// }
// });

// const mcqSchema = new mongoose.Schema({
// 	question: {
// 		type: String,
// 		required: [true, 'Question is required']
// 	},
// 	options: {
// 		type: [String],
// 		required: [true, 'Options are required for MCQs'],
// 		validate: [(val) => 1 < val.length < 6, 'There must be at least 2 and at most 5 options in a MCQ']
// 	},
// 	correct_option: {
// 		type: Number,
// 		required: [true, 'Please specify the correct option'],
// 		max: options.length
// 	}
// });

// const text_question = new mongoose.Schema({
// 	question: {
// 		type: String,
// 		required: [true, 'Question is required']
// 	}
// });

// const assignmentSchema = new mongoose.Schema({
// questions: {
// 	type: [{	
// 		type: Schema.Types.ObjectId,
// 		require: true,
// 		refPath: "questions.onModel"
// 	,
// 	onModel: {
// 		type: String,
// 		required: true,
// 		enum: ['mcq_question', 'text_question']
// 	}
// }],
// 	validate: [(val) => val.length > 4, 'There must be at least 5 questions in an assignment'],
// }
// });

// console.log("all schemas created");