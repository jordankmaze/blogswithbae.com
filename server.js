// set up ======================================================================
var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var morgan = require('morgan');
var bodyParser = require('body-parser');
var mailer = require('express-mailer');
var nodemailer = require('nodemailer');

// configuration ===============================================================
app.use(express.static('./public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

app.post('/postEmail', sendMail = function(req, res) {

    var data = req.body;

    var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // secure:true for port 465, secure:false for port 587
    auth: {
        user: 'jkm@jordankmaze.com',
        pass: 'bIam2dw!'
        }
    });

    // setup email data with unicode symbols
    var mailOptions = {
        from: data.emailAddress,
        to: 'jkm@jordankmaze.com', // list of receivers
        subject: data.userName, // Subject line
        text: data.messageBody//, plain text body
        //html: '<b>Hello world ?</b>' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });

    res.json(data);
});

// listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listening on port " + port);
