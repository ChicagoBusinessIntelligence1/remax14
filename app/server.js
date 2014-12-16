var express = require('express'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
  errorhandler = require('errorhandler'),
  morgan = require('morgan'),
  path = require('path');
_ = require('underscore');

var sendgrid = require('sendgrid')('remax14', 'R1eKefo9ApTh');

var app = express()

// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
app.set('port', process.env.PORT || 3001);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}))
app.use(methodOverride());
app.use(express.static(path.join(__dirname, '')));

app.get('*', function (req, res) {
  res.render('index');
})

// POST /api/users gets JSON bodies
app.post('/sendmail', jsonParser, function (req, res) {

  var sendEmail = req.body;
  var fromName = sendEmail.fname + ' ' + sendEmail.lname;
  var messageBody = 'Send from remax1stclass.com contact us form\r\n';
  if (!_.isUndefined(sendEmail.phone)) {
    messageBody += 'Phone:' + sendEmail.phone + '\r\n';
  }
  if (!_.isUndefined(sendEmail.mobile)) {
    messageBody += 'Cell phone:' + sendEmail.mobile + '\r\n';
  }
  messageBody+='\r\n';
  messageBody+=sendEmail.body;
  sendgrid.send({
    to: 'chicagobusinessintelligence1@gmail.com',
    fromname: fromName,
    from: sendEmail.from,
    subject: sendEmail.subject,
    text: messageBody
  }, function (err, json) {
    if (err) {
      return console.error(err);
    }
    console.log(json);
  });
  console.log(sendEmail);

  res.send(200);
  res.end();
})

var server = app.listen(port, function () {

  var host = server.address().address
  var port = server.address().port


})
