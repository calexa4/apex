"use strict";

require("dotenv").config();

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const routes = require("./server/routes");
const cors = require("cors");
const helmet = require ("helmet");
const cookieParser = require("cookie-parser");
const ignoreFavicon = require("./server/utilities/ignoreFavicon");
const collectErrors = require("./server/utilities/collectErrors");

app.set("trust proxy", true);

app.use(collectErrors.initialize);

app.use(cors({ 
	origin: true,
	credentials: true 
}));

app.use(function noCache(request, response, next) {
  response.header("Cache-Control", "private, no-cache, no-store, must-revalidate");
  response.header("Expires", "-1");
  response.header("Pragma", "no-cache");
  next();
});

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(ignoreFavicon);
app.use("/api", express.static("public"));

routes(app);

app.use(function (error, request, response, next) {
	request.httpError.setStatus(500).addError("server", error.stack, next);
});

app.use(collectErrors.terminate);

var nodeEnvironment = process.env.NODE_ENV;

if (nodeEnvironment === "production") {
	app.listen(process.env.PORT, function () {
	  console.log("Production API listening on port " + process.env.PORT + "...");
	});
} else {
	var envStr = nodeEnvironment.charAt(0).toUpperCase() + nodeEnvironment.slice(1);
	app.listen(3000, function () {
	  console.log(envStr + " API listening on port " + process.env.PORT + "...");
	});
}

module.exports = app;