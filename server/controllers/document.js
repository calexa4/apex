const Sequelize = require('sequelize');
const AWS = require('aws-sdk');
const s3 = new AWS.S3({ region: process.env.S3_REGION });
const uuidv4 = require('uuid/v4');

exports.getDownloadUrl = function(request, response, next) {

	const bucket = request.body.bucket;
	const key = request.body.key;

	const params = {
		Bucket: bucket,
		Key: key,
		Expires: 30
	};

	const url = s3.getSignedUrl('getObject', params);

	response.status(200).send({
		url: url
	});

};