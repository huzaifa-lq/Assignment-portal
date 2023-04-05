const express = require("express");
const {
    createTextQuestion,
} = require("../controllers/textQuesController");

const router = express.Router();

router.route("/textQuestion/new").post(createTextQuestion);

module.exports = router;