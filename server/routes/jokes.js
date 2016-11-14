var express = require('express');
var router = express.Router();

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

//post request for new jokes
router.post('/', function(req, res) {
  // req.body is supplied by bodyParser above
  console.log("REQ body: ", req.body);
  var newJoke = req.body;

  //checking to make sure joke input is not blank
  if(newJoke.whoseJoke == '' || newJoke.jokeQuestion == '' || newJoke.punchLine == '') {
    res.sendStatus(400);
  } else {
  jokes.push(newJoke);
  res.sendStatus(201);
  }

});

// response to send jokes array to DOM
router.get('/', function(req, res) {
  res.send(jokes);
});

module.exports = router;
