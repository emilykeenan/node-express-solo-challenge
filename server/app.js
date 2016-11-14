var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// initial jokes provided by the client
var jokes = [
  {
    whoseJoke: "Huck",
    jokeQuestion: "What's the difference between roast beef and pea soup?",
    punchLine: "Anyone can roast beef."
  },
  {
    whoseJoke: "Kris",
    jokeQuestion: "How many software engineers does it take to change a lightbulb?",
    punchLine: "None! That's a hardware problem!"
  },
  {
    whoseJoke: "Luke",
    jokeQuestion: "Friends are like snow flakes...",
    punchLine: "If you pee on them they disappear."
  }
];

// routing modules
var index = require('./routes/index');

// static files
app.use('/', index);

// setting port to listen on
// set port to listen on
app.set('port', process.env.PORT || 4000);

app.listen(app.get('port'), function() {
  console.log('The server is listening on port ' + app.get('port'));
});

// response to send jokes array to DOM
app.get('/jokes', function(req, res) {
  res.send(jokes);
});
