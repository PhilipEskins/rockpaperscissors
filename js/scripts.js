var score = 0;
var playWin = 0;
var cpuWin = 0;
var tie = 0;

function playTime() {
  score ++;
}

function choose() {
  var choice = Math.floor(Math.random() * 3);
  var move;
  if (choice === 0) {
    move = "Scissor";
  } else if (choice === 1) {
    move = "Rock";
  } else if (choice === 2) {
    move = "Paper";
  }
  return move;
}

function compareResults(computerMove, playerMove){
  var result;

  if(playerMove === "Rock"){
    if(computerMove === "Paper") {
      result = "computer";
      cpuWin++; }
    else if(computerMove === "Scissor") {
      result = "player";
      playWin++; }
  }
  if(playerMove === "Paper"){
    if(computerMove === "Scissor") {
      result = "computer";
      cpuWin++; }
    else if(computerMove === "Rock") {
      result = "player";
      playWin++;}
  }
  if(playerMove === "Scissor"){
    if(computerMove === "Rock") {
      result = "computer";
      cpuWin++; }
    else if(computerMove === "Paper") {
      result = "player";
      playWin++;}
  }
  if(playerMove === computerMove) {
    result = "tie";
    tie++; }

  return result;
}

$(document).ready(function() {

  $("#testFunction").submit(function(event) {
    event.preventDefault();
    playTime();

    var playerMove = $("input:radio[name=gameData]:checked").val();
    var computerMove = choose();
    var result = compareResults(computerMove, playerMove);
    var playerPercent = (playWin/score)*100;
    var cpuPercent = (cpuWin/score)*100;
    var tiePercent = (tie/score)*100;


    if (result === "player") {
      $(".playResults").text("Player Wins!");
    } else if (result === "computer") {
      $(".playResults").text("Computer Wins!");
    } else if (result === "tie") {
      $(".playResults").text("It's a tie!");
    }

    $(".displayArea").text("Your wins are: " + playWin);
    $(".playerPercent").text("Your win percentage is: " + playerPercent.toFixed(0) + "%");
    $(".cpuWins").text("Computer wins are: " + cpuWin);
    $(".cpuPercent").text("Computer win percentage is: " + cpuPercent.toFixed(0) + "%");
    $(".tieResults").text("Tie percentage : " + tiePercent.toFixed(0) + "%");
    $(".scoreArea").text("Your playtimes are: " + score);
    $(".playerSelection").text("You picked: " + playerMove);
    $(".computerSelection").text("Computer picked: " + computerMove);
  });
});
