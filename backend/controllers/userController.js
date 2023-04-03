const ErrorHander = require("../utils/errorhandler");
const User = require("../models/userModel");
const catchAsyncErrors = require("../middleware/catchAsyncError");
const sendToken = require("../utils/jwtToken");
// const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");
const ErrorHandler = require("../utils/errorhandler");
const sendEmail = require("../utils/sendEmail")

exports.registerUser = catchAsyncErrors(async (req, res, next) => {
    const { name, email, password } = req.body;
  
    const user = await User.create({
      name,
      email,
      password,
    });
  
    sendToken(user, 201, res);
    // res.status(200).json({
    //     success: true,
    //     message: "User successfully created!", 
    // });
  });
  
  exports.loginUser = catchAsyncErrors(async (req, res, next) => {
    const { email, password } = req.body;
  
    if (!email || !password) {
      return next(new ErrorHander("Please Enter Email & Password", 400));
    }
  
    const user = await User.findOne({ email }).select("+password");
  
    if (!user) {
      return next(new ErrorHander("Invalid email or password", 401));
    }
  
    const isPasswordMatched = await user.comparePassword(password);
  
    if (!isPasswordMatched) {
      return next(new ErrorHander("Invalid email or password", 401));
    }

    
  sendToken(user, 200, res);
    // res.status(200).json({
    //     success: true,
    //     message: "User logged in successfully", 
    // });
  });

  exports.logoutUser = catchAsyncErrors(async (req, res, next) => {
    res.cookie("token",null,{
      expires: new Date(Date.now()),
      httpOnly: true,
    });

    res.status(200).json({
      success: true,
      message: "Logged out",
    });
  });


  exports.forgotPassword = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findOne({email: req.body.email});
  
  if(!user){
    return next(new ErrorHandler("User not found", 404))
  }
  const passwordToken = user.getResetPasswordToken();

  await user.save({validateBeforeSave: false});
  const resetPasswordUrl = `${req.protocol}://${req.get("host")}/api/v1/password/reset/${passwordToken}`;

    const message = `To reset the password, please go to\n${resetPasswordUrl}\nIf you have not tried to reset the password, please ignore this email.`

    try{
    await sendEmail({
      email:user.email,
      subject: "Assignment Portal Reset Password" ,
      message});
    
    res.status(200).json({
      success: true,
      message: `Email sent successfully to ${user.email}`
    });
  }catch(error){
      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;
      await user.save({validateBeforeSave: false});
      return next(new ErrorHandler(error.stack,500));
    }
  });

  exports.resetPassword = catchAsyncErrors( async (req,res, next) => {
    const resetPasswordToken = crypto
      .createHash("sha256")
      .update(req.params.token)
      .digest("hex");

      const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire: { $gt:Date.now()}
      });

      if(!user){
        return next(new ErrorHandler("Invalid or expired url ",400));
      }
      if(req.body.password !== req.body.confirmPassword){
        return next(new ErrorHandler("Passwords do not match", 400));
      }
      user.password = req.body.password;
      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;

      await user.save();
      sendToken(user, 200, res);
    });