const express = require("express");
const { createAssignment } = require("../controllers/assignmentController");

const router = express.Router();

router.route("/teacher/assignment/new").post(createAssignment);

module.exports = router;