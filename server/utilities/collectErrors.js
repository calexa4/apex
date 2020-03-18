class HttpError {
	
	constructor () {
		this.errors = new Array();
	}

	setStatus(status) {
		this.status = status;
		return this;
	}

	addError(source, error, next) {

		this.errors.push({
			'source': source,
			'details': error
		});
		
		if (next) {
			return next();
		} else {
			return this;
		}

	}

	sendResponse(response) {
		response.status(this.status).send({
			'errors': this.errors
		});
	}

}

exports.initialize = function (request, response, next) {
	request.httpError = new HttpError();
	next();
};

exports.terminate = function (request, response, next) {
	if (request.httpError.errors.length) {
		request.httpError.sendResponse(response);
	} else {
	 	next();
	}
};