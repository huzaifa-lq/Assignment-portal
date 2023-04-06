const ErrorHander = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncError");
const ErrorHandler = require("../utils/errorhandler");
const TextQuestion = require("../models/textQuestionModel");

exports.createTextQuestion = catchAsyncErrors(async (req, res, next) => {
    await TextQuestion.create({
        question: req.body.question
    });

    res.status(200).json({
        success: true,
        message: "Text Question created successfully"
    })
});


exports.updateTextQuestion = catchAsyncErrors(async (req, res, next) => {
    const {id, question} = req.body;
    const textQuestion = await TextQuestion.findById(id);
    if(!textQuestion){
      return next(new ErrorHandler("Question not found", 404))  
    }
    textQuestion.question = question;
    await textQuestion.save();
    res.status(200).json(textQuestion);

    res.status(200).json({
        success: true,
        message: "Text Question updated successfully",
        textQuestion
    })
});