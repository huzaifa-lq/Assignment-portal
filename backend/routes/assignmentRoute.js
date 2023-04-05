const express = require("express");
const { createAssignment,getAssignments } = require("../controllers/assignmentController");

const router = express.Router();

router.route("/teacher/assignment/new").post(createAssignment);
router.route("/teacher/assignments").get(getAssignments);

module.exports = router;