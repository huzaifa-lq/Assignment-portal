const mongoose = require('mongoose');
const validator = require("validator");

const userSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: [true, 'Name is required']
        },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        validate: (value) => {
                  return validator.isEmail(value);
            } 
    },
    password: {
        type: String,
        minLength: [6, 'Password should be at least 6 characters long'],
        required: [true, 'Password is required'],
         select: false
    },
    role: {
        type: String,
        enum: ['Admin', 'Teacher']
    },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
    });

    module.exports = mongoose.model("User", userSchema);