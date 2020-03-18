module.exports = function (request, response, next) {

	if (request.originalUrl === '/favicon.ico') {
		response.status(204).send();
	} else {
		next();
	}

};