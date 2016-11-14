console.log('js loaded');

$(document).ready(function() {
  console.log('JQ loaded');

  $("#postJokeForm").on("submit", function(event) {
    event.preventDefault();

    //declaring empty joke object
    var newJoke = {};

    $.each($('#postJokeForm').serializeArray(), function(i, field) {
      newJoke[field.name] = field.value;
    });

    console.log(newJoke);

    // send joke object to the Server
    $.ajax({
      type: 'POST',
      url: '/jokes',
      data: newJoke,
      success: function(response) {
        console.log(response);
        getJokes();
      },
      error: function(error) {
        if(error.status == 400) {
          alert("That was a bad joke! Try again!");
        }
      }
    })


  })

  getJokes();


}); // end doc ready

function getJokes() {
  $.ajax({
    type: 'GET',
    url: '/jokes',
    success: function(jokeData) {
      console.log('u got jokes');
      jokesToDom(jokeData);
    }
  });
}

function jokesToDom(jokes) {
  $("#jokeContainer").empty();

  for (var i = 0; i < jokes.length; i++) {
    $("#jokeContainer").append('<div class="joke"></div>');
    var $el = $("#jokeContainer").children().last();
    $el.append('<h3>' + jokes[i].whoseJoke + '</h3>');
    $el.append('<p>' + jokes[i].jokeQuestion + '</p>');
    $el.append('<p>' + jokes[i].punchLine + '</p>')
  }
}
