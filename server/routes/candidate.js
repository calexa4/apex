const express = require("express");
const router = express.Router();
const controllers = require("../controllers"); 

router.get(
	"/", 
	controllers.candidate.getAll
);
  
module.exports = router;