const csv = require("csv-parse"); 
const fs = require('fs');
const parser = csv({columns: true});

module.exports = (path, callback) => {
	fs.createReadStream(path).pipe(parser);
		parser.on("readable", () => {
		let record;
		while (record = parser.read()) {
			callback(record);
		}
	});	
}