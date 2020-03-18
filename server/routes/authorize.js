const express = require("express");
const router = express.Router();
const controllers = require("../controllers"); 

router.use("*", controllers.authorize);
  
module.exports = router;