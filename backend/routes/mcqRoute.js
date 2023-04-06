const express = require("express");
const { createMCQ, updateMCQ } = require("../controllers/mcqQuesController");
const { isAuthenticatedUser } = require("../middleware/auth");

const router = express.Router();

router.route("/mcqQuestion").post(isAuthenticatedUser, createMCQ);
router.route("/mcqQuestion").put(isAuthenticatedUser, updateMCQ);

module.exports = router;