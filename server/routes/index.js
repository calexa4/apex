const authorize = require("./authorize");
const user = require("./user");
const candidate = require("./candidate");
const document = require("./document");
const email = require("./email");
const public = require("./public");

module.exports = function (app) {
	
	app.use("/api/*", authorize);
	app.use("/api/user", user);
	app.use("/api/candidate", candidate);
	app.use("/api/document", document);
	app.use("/api/email", email);
	app.use("/api/public", public);

};
