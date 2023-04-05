const catchAsyncError = require("../middleware/catchAsyncError");
const Assignment = require("../models/assignmentModel");
const TextQuestion = require("../models/textQuestionModel")
const User = require("../models/userModel");

exports.createAssignment = catchAsyncError(async (req, res, next) =>{
    const{email, questions} = req.body;
    console.log(questions);
    // const user = await User.findOne({email: req.body.email});
    // for(let i = 0; i < questions.length; i++){
    //     questions[i] = Question.findB
    // }
    // if(!user){
    //     return next(new ErrorHandler("User not found", 404))
    //   }
    const assignment = await Assignment.create({questions});
    console.log(assignment);
    res.status(200).json({
        success: true,
        assignment
    })
  
});
exports.getAssignments = catchAsyncError(async (req, res, next) => {
    const {email} = req.body;
    // const assignments = await User.findOne({ email }).select('assignments').populate('assignments');
    const assignments = await User.findOne({ email }).populate('assignments');
    console.log(assignments);
    
    // const user = await User.findOne({ email });
    // if (!user) {
    //     console.log("User not found");
    //     console.log(email);
    //     return next(new ErrorHandler("Invalid email", 401));
    //   }
    // const assignments = await user.select('assignments').populate('assignments');
    
    // if (!assignments) {
    //     console.log("User not found");
    //     return next(new ErrorHandler("Invalid email or password", 401));
    //   }
    res.status(200).json(assignments);

})