require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
};

const successCode = 200;
const errorCode = 400;

const mailgun = require('mailgun-js');
const mg = mailgun({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.MAILGUN_DOMAIN,
  host: 'api.mailgun.net',
});

export function handler(event, context, callback) {
  let data = JSON.parse(event.body);
  let { name, email, subject, message } = data;
  let mailOptions = {
    from: `${name} <${email}>`,
    to: process.env.TARGET_EMAIL,
    replyTo: email,
    subject: subject,
    text: `${message}`,
  };

  mg.messages().send(mailOptions, function (error, body) {
    console.log(mailOptions);
    console.log(body);
    console.log('debug');
    if (error) {
      callback(null, {
        errorCode,
        headers,
        body: JSON.stringify(error),
      });
    } else {
      callback(null, {
        successCode,
        headers,
        body: JSON.stringify(body),
      });
    }
  });
}
