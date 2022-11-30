const throwOptions = ["rock", "paper", "scissors"];

function getComputerThrow(){
  return throwOptions[Math.floor(Math.random() * throwOptions.length)];
}

// A function to quickly test game alert messages //
function ranPlayerThrow(){
  return throwOptions[Math.floor(Math.random() * throwOptions.length)];
}
// const playerThrow = "rock";

function playRound(player, computer){

  player = ranPlayerThrow();
  computer = getComputerThrow();
  console.log(computer);

  if (player == "rock"){
    if (computer == "scissors"){
      alert("YOUR ROCK smashes the scissors to pieces!");
    } else if (computer == "paper" ) {
      alert("COMPUTER'S PRINTER PAPER smothers your pet rock!");
    } else {
      alert("DRAW!");
    }
  } else if (player == "paper"){
    if (computer == "scissors"){
      alert("COMPUTER SCISSOR HANDS dices you up!");
    } else if (computer == "rock" ) {
      alert("YOU SMOTHER the computer's pet rock!");
    } else {
      alert("DRAW!");
    }
  } else if (player == "scissors"){
    if (computer == "paper"){
      alert("YOU absolutely SHRED what they're printing out!");
    } else if (computer == "rock" ) {
      alert("Your scissors are now scissorses... they've been smashed to pieces by ELECTRONIC ROCK!");
    } else {
      alert("DRAW!");
    }
  }   
};
