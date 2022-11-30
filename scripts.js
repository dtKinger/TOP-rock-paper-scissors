const throwOptions = ["rock", "paper", "scissors"];

function getComputerThrow(){
  return throwOptions[Math.floor(Math.random() * throwOptions.length)];
}

const playerThrow = "rock";

function playRound(player, computer){

  player = playerThrow;
  computer = getComputerThrow();
  console.log(computer);

  if (playerThrow == "rock"){
    if (computer == "scissors"){
      alert("Rock beats scissors, You won!");
    } else if (computer == "paper" ) {
      alert("The Computer beat you with paper!");
    } else {
      alert("It's a tie game!");
    }
  }   
};
