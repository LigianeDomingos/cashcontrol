var express = require('express');
var router = express.Router();
const IndexController = require('../controllers/IndexController');

router.get('/index', IndexController.index);

module.exports = router;