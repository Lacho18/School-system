const express = require("express");
const router = express.Router();

const { getGrades } = require("../controllers/gradesController");

router.route('/*')
    .get(getGrades);

module.exports = router;