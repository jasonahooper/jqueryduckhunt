// Constructor function for a Game

function Game(difficulty) {
  this.lives = 10;
  this.score = 0;
  this.shots = 3;

  // Add a callback for when the Duck is missed!
  var _this = this;
  $('#game').click(function() {
    _this.shots--;
    if (_this.shots >= 0) {
      $('#round-shot' + _this.shots).removeClass("shot sprite")
    }
  });

  // Set the difficulty- easy by default
  if(typeof(difficulty) === "undefined") {
    this.speed = this.difficulty.easy;
  }
  else {
    this.speed = this.difficulty[difficulty];
  }
  // set initial score
  this.addScore(0);

  // Kick-off the first wave of Ducks
  this.nextRound();
}

// Maps difficulty to speed at which a Duck traverses the screen in milliseconds.
Game.prototype.difficulty = {
  easy: 8000,
  medium: 4000,
  hard: 2500
}

// Fire off two new Ducks. After waiting a little while, continue to the next
// round if we've got more lives, or show the Game Over screen.
Game.prototype.nextRound = function() {
  var duck = new Duck(this);
  var duck = new Duck(this);
  var _this = this;

  this.shots = 3;
    $('.round-shot').addClass("shot sprite");

  // Do this again in a little while...
  var roundTimer = setTimeout(function() {
    // End the game if we've run out of lives
    if(_this.lives <= 0) {
      // Game over man
      _this.gameOver();
    }
    else {
      // Keep going!
      _this.nextRound();
    }
  }, this.speed + 2000);

}

// Show the Game Over modal and insert the player's score.
Game.prototype.gameOver = function() {
  $("#points").html(this.score);
  $("#game-over").toggle();
}

// Add the given number of points to the score, and print the total to the log.
Game.prototype.addScore = function(points) {
  this.score += points;
  console.log("Score: " + this.score);
  $('#game-score').html(this.score);
}