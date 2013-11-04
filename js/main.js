$(document).ready(function() {
  console.log("Welcome to Duck Hunt!");

  // Behaviour for the play again link
  $('#play-again').click(function(e) {
    $("#game-over").toggle();
    new Game();
  });

  // Moves the crosshair with the mousepointer
  // TODO: Add a mousemove event to the #game element...
  $('#game').mousemove( function(e) {
    $('#crosshair').show().css({
      left:e.pageX - $('#crosshair').width()/2,
      top:e.pageY - $('#crosshair').height()/2});
  });
  // Kick-off a New Game
  // TODO: Pass in a string to represent the difficulty level
  console.log("Start");
  $("#game-over-message").toggle();
  $("#game-over").toggle();
  $('.game-start').click(function(e) {
    $("#game-over").toggle();
    $("#game-over-message").toggle();
    new Game(this.id.substr(6));
  });
  // new Game();

  // new Duck();
});