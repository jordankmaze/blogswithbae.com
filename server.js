// set up ======================================================================
var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var morgan = require('morgan');
var bodyParser = require('body-parser');
var mailer = require('express-mailer');
var nodemailer = require('nodemailer');
var xoauth2 = require('xoauth2');
var smtpTransport = require('nodemailer-smtp-transport');

// configuration ===============================================================
app.use(express.static('./public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

app.post('/postEmail', sendMail = function(req, res) {

  var data = req.body;

  var transporter = nodemailer.createTransport(smtpTransport({
      service: 'smtp-mail.outlook.com', // hostname
      secureConnection: false, // TLS requires secureConnection to be false
      port: 587, // port for secure SMTP
      auth: {
          user: "blogswithbae@outlook.com",
          pass: "Darkknight2"
      },
      tls: {
          ciphers:'SSLv3'
      }
  }));

  // setup email data with unicode symbols
  var mailOptions = {
      from: data.emailAddress,
      to: 'blogswithbae@outlook.com', // list of receivers
      subject: data.userName, // Subject line
      text: data.messageBody//, plain text body
      //html: '<b>Hello world ?</b>' // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
          return console.log(error);
      }
      console.log('Message %s sent: %s', info.messageId, info.response);
  });

  console.log("email sent");

});

// listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listening on port " + port);
