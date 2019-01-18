var score = 0;
var win = 0;

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

  if(playerMove === "Rock"){
    if(computerMove === "Paper") {
      $(".playResults").text("Computer Wins!"); }
    if(computerMove === "Scissor") {
      $(".playResults").text("Player Wins!");
      win++;}
  }
  if(playerMove === "Paper"){
    if(computerMove === "Scissor") {
      $(".playResults").text("Computer Wins!"); }
    if(computerMove === "Rock") {
      $(".playResults").text("Player Wins!");
      win++;}
    }
  if(playerMove === "Scissor"){
    if(computerMove === "Rock") {
      $(".playResults").text("Computer Wins!"); }
    if(computerMove === "Paper") {
      $(".playResults").text("Player Wins!");
      win++;}
    }
  if(playerMove === computerMove) {
    $(".playResults").text("It's a tie!");}

  // if (computerMove === "Scissor" && playerMove === "Rock") {
  //   $(".playResults").text("Player Wins!");
  //   win++;}
  // if (computerMove === "Scissor" && playerMove === "Paper") {
  //   $(".playResults").text("Computer Wins!"); }
  //
  // if (computerMove === "Paper" && playerMove === "Rock") {
  //   $(".playResults").text("Computer Wins!"); }
  //
  // if (computerMove === "Paper" && playerMove === "Scissor") {
  //   $(".playResults").text("Player Wins");
  //   win++;}
  //
  // if (computerMove === "Rock" && playerMove === "Scissor") {
  //   $(".playResults").text("Computer Wins!"); }
  //
  // if (computerMove === "Rock" && playerMove === "Paper") {
  //   $(".playResults").text("Player Wins");
  //   win++;}
  //
  // if (computerMove===playerMove) {
  //   $(".playResults").text("It's a tie!");}

  // if (playerMove ==="Rock") {
  //   playValue = 1;
  //   } else if (playerMove ==="Scissor") {
  //   playValue = 2;
  //   } else if (playerMove === "Paper") {
  //   playValue = 3;
  //   }
  //
  // if (computerMove === "Rock") {
  //   cpuValue = 1;
  //   } else if (computerMove === "Scissor") {
  //   cpuValue = 2;
  //   }
  //   else if (computerMove === "Paper") {
  //   cpuValue = 3;
  //   }
  //
  // if (playValue === cpuValue) {
  //   $(".playResults").text("Its a tie!");
  // }
  // else if (playValue > cpuValue) {
  //   $(".playResults").text("Player wins");
  // }
  // else if (cpuValue > playValue) {
  //   $(".playResults").text("Computer wins");
  // }
}

$(document).ready(function() {

  $("#testFunction").submit(function(event) {
    event.preventDefault();

    var playerMove = $("input:radio[name=gameData]:checked").val();
    var computerMove = choose();

    compareResults(computerMove, playerMove);
    playTime();
      $(".scoreArea").text("Your playtimes are: " + score);
      $(".displayArea").text("Your wins are: " + win)
      $(".playerSelection").text("You picked: " + playerMove);
      $(".computerSelection").text("Computer picked: " + computerMove);
  });
});
