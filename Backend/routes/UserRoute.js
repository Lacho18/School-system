const express = require("express");
const router = express.Router();
const userFunctions = require('../controllers/userController');

router.route('/*')
    .get(userFunctions.getUser);

module.exports = router;
