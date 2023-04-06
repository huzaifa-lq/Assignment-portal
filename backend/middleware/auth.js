const ErrorHandler = require("../utils/errorhandler");
const catchAsyncError = require("./catchAsyncError");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

exports.isAuthenticatedUser = catchAsyncError(async (req, res, next) => {
    const {token} = req.cookies;
    // console.log("token:"+token);
    if(!token){
        console.log("no token"+req.cookie);
         return next(new ErrorHandler("Please log in to access this resource", 401));
    }
    const decodedData = jwt.verify(token, process.env.JWT_SECRET);
    // console.log("id:"+decodedData.id);
    req.user = await User.findById(decodedData.id);
    // console.log("User:"+req.user);

    next();
});

exports.authorizedRoles = function(...roles){
    return (req, res, next) => {
    if(!roles.includes(req.user.role)){
        return next(
            new ErrorHandler(
                `Role ${req.user.role} is not authorized to access this resource`,
                403
                )
                );
    }

    next();
};
};