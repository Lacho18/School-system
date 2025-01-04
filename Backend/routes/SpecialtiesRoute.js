const express = require("express");
const router = express.Router();

const { getGradesBySpecialties } = require("../controllers/specialtiesController");

router.route('/*')
    .get(getGradesBySpecialties);

module.exports = router;