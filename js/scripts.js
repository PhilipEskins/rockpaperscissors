var score = 0;
var win = 0;

function playTime() {
  score ++;
}

function optionPick(option) {
  if (option==="Rock" ) {
    alert("Paper");
    win++;
  }
  if (option==="Scissor") {
    alert("Rock");
    win++;
  }
  if (option==="Paper") {
    alert("Scissor")
    win++;
  }
}

$(document).ready(function() {

  $("#testFunction").submit(function(event) {
    event.preventDefault();

    var gameData = $("input:radio[name=gameData]:checked").val();

    optionPick(gameData);
    playTime();
     $(".scoreArea").text("Your playtimes are: " + score);
     $(".displayArea").text("Your wins are: " + win)
  });
});
