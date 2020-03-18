const Sequelize = require("sequelize");
const User = require("../models").User;
const Person = require("../models").Person;
const Email = require("../models").Email;
const moment = require("moment");

module.exports = function (request, response, next) {
	
	const url = request.originalUrl

	if (url.indexOf("/api/public/") === -1) {

		if (!request.cookies.session) {
		
			response.status(401).send({
				source: "server",
				details: "Unauthorized " + url
			});

		} else {

			const email = request.cookies.session.email;
			const sessionId = request.cookies.session.sessionId;

			User.find({	
				attributes: ["id","session_expiration"],
				where: {
					session_id: sessionId,
				},
				include: [{
					model: Person,
					as: "person",
					attributes: ["id"],
					include: [{
						model: Email,
						as: "emails",
						attributes: ["address"],
						where: {
							address: email
						}
					}]
				}]
			}).then(authenticatedUser => { 

				if (!authenticatedUser) {

					response.status(401).send({
						source: "server",
						details: "Unauthorized " + url
					});

				} else {

					const remainingSessionTime = moment(authenticatedUser.session_expiration).diff(moment());
					
					if (remainingSessionTime <= 0) {

						response.status(401).send({
							source: "server",
							details: "Authorization expired"
						});

					} else {

						const sessionExpiration = moment().add(30, "minutes").format("YYYY-MM-DD HH:mm:ss.SSS Z");

						authenticatedUser.update({ 
							session_expiration: sessionExpiration
						});

						if ("/api/user/authorize/" === url  ||
								"/api/user/authorize/" === url + "/") {
							
							response.status(200).send({
								source: "server",
								details: "Authorized"
							});

						} else {

							next();

						}

					}

				}

			});

		}

	} else {

		next();

	}

};