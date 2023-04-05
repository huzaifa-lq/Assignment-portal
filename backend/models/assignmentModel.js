const mongoose = require('mongoose');


const assignmentSchema = new mongoose.Schema({
    questions: {
        type: [{
        questionId: {	
            type: mongoose.Schema.Types.ObjectId,
            required: [true, 'questionId is required'],
            refPath: "questions.onModel"
        }
        ,
        onModel: {
            type: String,
            required: [true, 'Please specify the type of question'],
            enum: ['MCQ', 'TextQuestion']
        }
    }],
        //validate: [(val) => {console.log(val); return val.length > 4;}, 'There must be at least 5 questions in an assignment'],
        required: [true,'questons are required to create an assignment'],
    }
    });

// tSchema = new mongoose.Schema({
//     question: {
//         type: {	
//         questionId: {
//             type: mongoose.Schema.Types.ObjectId,
//             required: true,
//             refPath: "questions.onModel"
//             }
//         ,
//         onModel: {
//             type: String,
//             required: true,
//             enum: ['MCQ', 'TextQuestion']
//         }
//     },
//         // validate: [(val) => val.length > 4, 'There must be at least 5 questions in an assignment'],
//         required: true,
//     }
//     });

    module.exports = mongoose.model("Assignment", assignmentSchema);