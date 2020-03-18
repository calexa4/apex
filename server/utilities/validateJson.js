const path = require('path');
const fs = require('fs');
const Ajv = require('ajv');

const definitionsPath = path.join(__dirname, '../json-schema/definitions.json');
const definitions = JSON.parse(fs.readFileSync(definitionsPath, 'utf8'));

var ajv = new Ajv({
	format: 'full', 
	allErrors: true, 
	jsonPointers: true,
	schemas: [definitions]
});

require('ajv-errors')(ajv);

module.exports = schemaFileName => {
	return (request, response, next) => {
		
		const schemaFilePath = path.join(
			__dirname, 
			'../json-schema/', 
			schemaFileName
		);
		const schema = JSON.parse(fs.readFileSync(schemaFilePath, 'utf8'));
		const validate = ajv.compile(schema);
		const isValid = validate(request.body);	

		if (!isValid) {

			var i = validate.errors.length;

			request.httpError.setStatus(400);

			while(i--) {
				const source = 
					validate.errors[i].params.errors[0].params.missingProperty || 
					validate.errors[i].params.errors[0].dataPath.substring(1);
				const error = validate.errors[i].message;
				request.httpError.addError(source, error);
			}

			next('route');

		} else {

			next();

		}
		
	};
};