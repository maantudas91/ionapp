var express = require('express');
var router = express.Router();

const userCntl = require("./../../controllers/user-controller");

/* GET users listing. */
router.get('/users', userCntl.getUsers);

module.exports = router;
