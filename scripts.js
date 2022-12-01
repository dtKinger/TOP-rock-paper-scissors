/* TO DO
1. Make a results message container instead of an Alert box
2. Figure out how to count a win and keep score for Player and Computer
3. Figure how to End the game when one hits 5 wins.
4. Allow for a game reset / Try again.
*/

// Initialize game's inputs. App doesn't run without this.
let computer = null;
let playerThrow = null;

// Create an array for the computer to choose from.
const throwOptions = ["rock", "paper", "scissors"];

// Pick a random index in throwOptions array, which grabs its value.
function getComputerThrow(){
  return throwOptions[Math.floor(Math.random() * throwOptions.length)];
}

// Select all buttons inside a .choices class (limited selector scope)
const choices = document.querySelector('.choices');
const btns = choices.querySelectorAll('button');

// for Each loops to add an event listener to buttons
btns.forEach(function (i) {
  i.addEventListener('click', function() {
    playerThrow = i.getAttribute('value');

    // Play the round immediately when the player throws.
    playRound(playerThrow, computer);

  });
});

/* ============================
Playing one round of the game
============================= */
function playRound(playerX, computerX) {
  
  computer = getComputerThrow();
  // player = playerThrow;
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