const express = require("express");
const { createMCQ, updateMCQ } = require("../controllers/mcqQuesController");

const router = express.Router();

router.route("/mcqQuestion").post(createMCQ);
router.route("/mcqQuestion").put(updateMCQ);

module.exports = router;