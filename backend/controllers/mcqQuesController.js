const catchAsyncErrors = require("../middleware/catchAsyncError");
const Mcq = require("../models/mcqModel");

exports.createMCQ = catchAsyncErrors(async (req, res, next) => {
    const {question, options, correctOptionIndex} = req.body;
    const mcq = await Mcq.create({question, options, correctOptionIndex});
    res.status(200).json({
        success: true,
        message: "MCQ created successfully",
        mcq
    });
});


exports.updateMCQ = catchAsyncErrors(async (req, res, next) => {
    const {id, question, options, correctOptionIndex} = req.body;
    const mcq = await Mcq.findById(id);
    if(!mcq){
      return next(new ErrorHandler("Question not found", 404))  
    }
    mcq.question = question;
    mcq.options = options;
    mcq.correctOptionIndex = correctOptionIndex;
    await mcq.save();
    
    res.status(200).json({
        success: true,
        message: "Question updated successfully",
        mcq
    });
});