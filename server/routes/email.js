const express = require('express');
const router = express.Router();
const controllers = require('../controllers');

router.post('/send', controllers.email.send);
module.exports = router;