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