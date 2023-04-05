const express = require("express");
const { createMCQ } = require("../controllers/mcqQuesController");

const router = express.Router();

router.route("/mcqQuestion").post(createMCQ);

module.exports = router;