var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// puts post request body data and store it on req.body
app.use(bodyParser.urlencoded({extended: true}));

// routing modules
var index = require('./routes/index');
var jokes = require('./routes/jokes');

// routes
app.use('/jokes', jokes);

// static files
app.use('/', index);

// set port to listen on
app.set('port', process.env.PORT || 4000);

app.listen(app.get('port'), function() {
  console.log('The server is listening on port ' + app.get('port'));
});
