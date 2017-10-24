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

    var message = req.body;

    var LPAWS = {};
  
    // Initialize the Amazon Cognito credentials provider
    AWS.config.region = 'us-east-1'; // Region
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
        IdentityPoolId: 'us-east-1:add8b585-d649-4bfc-8659-3196385c1e50',
    });

    LPAWS.sendToTopic = function() {

        var sns = new AWS.SNS();
        var params = {
            //Message: 'Hello topic', /* required */
            Message: message,
            Subject: document.getElementById('subject-body').value,
            TopicArn: 'arn:aws:sns:us-east-1:432683389922:jordankmaze-contact-form'
        };

        sns.publish(params, function(err, data) {
            if (err) console.log(err, err.stack); // an error occurred
            else     console.log(data);           // successful response
        });
    };
});

// listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listening on port " + port);
