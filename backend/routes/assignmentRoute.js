const express = require("express");
const {
    getAssignments
} = require("../controllers/assignmentController")

const router = express.Router();

router.route("/teacher/assignments").get(getAssignments);

module.exports = router;