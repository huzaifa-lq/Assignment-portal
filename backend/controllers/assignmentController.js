const catchAsyncError = require("../middleware/catchAsyncError");
const User = require("../models/userModel");
const ErrorHandler = require("../utils/errorhandler");

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