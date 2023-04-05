const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const path = require("path");
const errorMiddleware = require("./middleware/error");


app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

// Route Imports
const user = require("./routes/userRoute");
const textQuestion = require("./routes/textQuesRoute");
const assignment = require("./routes/assignmentRoute");

app.use("/api/v1", user);
app.use("/api/v1", textQuestion);
app.use("/api/v1", assignment);

// Middleware for Errors
app.use(errorMiddleware);

module.exports = app;