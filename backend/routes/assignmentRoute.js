const express = require("express");
const { createAssignment,getAssignments } = require("../controllers/assignmentController");
const { isAuthenticatedUser,
authorizedRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/teacher/assignment/new").post(isAuthenticatedUser,createAssignment);
// router.route("/teacher/assignments").get(isAuthenticatedUser,authorizedRoles("Admin"), getAssignments);

module.exports = router;