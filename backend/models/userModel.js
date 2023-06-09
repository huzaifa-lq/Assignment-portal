const mongoose = require('mongoose');
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const assignment = require("../models/assignmentModel");

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
    assignments: {
      type: [{
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Assignment'
        }]
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
    });

    userSchema.pre("save", async function (next) {
        if (!this.isModified("password")) {
          next();
        }
      
        this.password = await bcrypt.hash(this.password, 10);
      });

      // JWT TOKEN
userSchema.methods.getJWTToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE,
    });
  };


  // Compare Password

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };


  // Generating Password Reset Token
userSchema.methods.getResetPasswordToken = function () {
    // Generating Token
    const resetToken = crypto.randomBytes(20).toString("hex");
  
    // Hashing and adding resetPasswordToken to userSchema
    this.resetPasswordToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");
  
    this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;
  
    return resetToken;
  };

  userSchema.methods.addAssignment = function(assignments){
    console.log("HERE");
    console.log("assignments:"+this.assignments);
    this.assignments.push(assignments);
    console.log("assignments:"+this.assignments);
  }

    module.exports = mongoose.model("User", userSchema);