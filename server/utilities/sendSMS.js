const sid = process.env.TWILIO_SID;
const token = process.env.TWILIO_TOKEN;
const number = process.env.TWILIO_NUMBER;
const client = require('twilio')(sid, token);

module.exports = (recipient, message) => {

	return client.messages.create({
    body: message,
    from: number,
    to: recipient
  });

};