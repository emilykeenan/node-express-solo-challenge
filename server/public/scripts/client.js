console.log('js loaded');

$(document).ready(function() {
  console.log('JQ loaded');
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
