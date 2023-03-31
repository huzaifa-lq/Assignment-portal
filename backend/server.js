const app = require("./app")
// const app = require("./app");
const connectDatabase = require("./config/database");
const dotenv = require("dotenv");
// const mongoose = require('mongoose');

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Uncaught Exception`);
    process.exit(1);
  });

//Config
dotenv.config({path:"./backend/config/config.env"})

//Connecting to Database
connectDatabase()

const server = app.listen(process.env.PORT, () => {
    console.log(`Server is working on http://localhost:${process.env.PORT}`);
  });

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);
  
    server.close(() => {
      process.exit(1);
    });
  });
  




























// const User = require("./models/userModel")

// User.create({
//     name: "Farooq",
//     password: "123456",
//     email: "qre@a.com"
// })

// const TextQuestion = require("./models/textQuestionModel")

// TextQuestion.create({
//     question: "What is the square root of 16?",
    
// })

// const Mcq = require("./models/mcqModel")

// Mcq.create({
//     question: "What is the square root of 16?",
//     options: ["4", "1","8"],
//     correctOptionIndex: 10
// })

// const Assignment = require("./models/assignmentModel")

// Assignment.create({
//     questions: [{questionId: new mongoose.Types.ObjectId('642410314420a9cf8f357230'), onModel: 'MCQ'}, {questionId: new mongoose.Types.ObjectId('642410314420a9cf8f357230'), onModel: 'MCQ'}, {questionId: new mongoose.Types.ObjectId('642410314420a9cf8f357230'), onModel: 'MCQ'}, {questionId: new mongoose.Types.ObjectId('642410314420a9cf8f357230'), onModel: 'MCQ'}, {questionId: new mongoose.Types.ObjectId('642410314420a9cf8f357230'), onModel: 'MCQ'}]
    
// })