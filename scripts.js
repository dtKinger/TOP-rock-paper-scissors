/* TO DO
1. Make a results message container instead of an Alert box
2. Figure out how to count a win and keep score for Player and Computer
3. Figure how to End the game when one hits 5 wins.
4. Allow for a game reset / Try again.
*/

let computer = null;
let playerThrow = null;

const throwOptions = ["rock", "paper", "scissors"];

function getComputerThrow(){
  return throwOptions[Math.floor(Math.random() * throwOptions.length)];
}


const btns = document.querySelectorAll('button');


btns.forEach(function (i) {
  i.addEventListener('click', function() {
    playerThrow = i.getAttribute('value');

    playRound(playerThrow, computer);

  });
});

function playRound(playerX, computerX) {
  
  computer = getComputerThrow();
  /* player = playerThrow; */
  console.log("Computer throws down " + computer.toUpperCase() + "!");
  console.log(`Player throws down ${playerThrow}!`);

  if (playerThrow == "rock"){
    if (computer == "scissors"){
      alert("YOUR ROCK smashes the scissors to pieces!");
    } else if (computer == "paper" ) {
      alert("COMPUTER'S PRINTER PAPER smothers your pet rock!");
    } else {
      alert("DRAW!");
    }
  } else if (playerThrow == "paper"){
    if (computer == "scissors"){
      alert("COMPUTER SCISSOR HANDS dices you up!");
    } else if (computer == "rock" ) {
      alert("YOU SMOTHER the computer's pet rock!");
    } else {
      alert("DRAW!");
    }
  } else if (playerThrow == "scissors"){
    if (computer == "paper"){
      alert("YOU absolutely SHRED what they're printing out!");
    } else if (computer == "rock" ) {
      alert("Your scissors are now scissorses... they've been smashed to pieces by ELECTRONIC ROCK!");
    } else {
      alert("DRAW!");
    }
  }   
};