const catchAsyncError = require("../middleware/catchAsyncError");
const MCQ = require("../models/mcqModel");

exports.createMCQ = catchAsyncError(async (req, res, next) => {
    const {question, options, correctOptionIndex} = req.body;
    const mcq = await MCQ.create({question, options, correctOptionIndex});
    res.status(200).json({
        success: true,
        message: "MCQ created successfully",
        mcq
    })
})