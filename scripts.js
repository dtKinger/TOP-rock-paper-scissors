/* TO DO
1. Make a results message container instead of an Alert box
2. Figure out how to count a win and keep score for Player and Computer
3. Figure how to End the game when one hits 5 wins.
4. Allow for a game reset / Try again.
*/

// Initialize game's inputs. App doesn't run without this.
let computer = null;
let playerThrow = null;
const winningMsg = "You WIN this round!";
const losingMsg = "You LOSE this round!";
const tyingMsg = "TIE, Throw again!";

// Create an array for the computer to choose from.
const throwOptions = ["rock", "paper", "scissors"];

// Pick a random index in throwOptions array, which returns its value.
function getComputerThrow(){
  return throwOptions[Math.floor(Math.random() * throwOptions.length)];
}


// Select all buttons inside a .choices class (limited selector scope)
const choices = document.querySelector('.choices');
const btns = choices.querySelectorAll('button');

// for Each loop to add a VALUE event listener to buttons
btns.forEach(function (i) {
  i.addEventListener('click', function() {
    playerThrow = i.getAttribute('value');

    // Play the round immediately when the player throws.
    playRound(playerThrow, computer);

  });
});

// for Each loop to add a RESULTS MESSAGE event listener to buttons
btns.forEach(function (rm) {
  rm.addEventListener('click', function() {
    let resultsMessage = document.getElementById("result-msg");
    resultsMessage.style.color = 
    function(){
    };
    resultsMessage.textContent = rsltMsg;
    resultsMessage.style.display = "block";
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
      rsltMsg = winningMsg;
    } else if (computer == "paper" ) {
      rsltMsg = losingMsg;
    } else {
      rsltMsg = tyingMsg;
    }
  } else if (playerThrow == "paper"){
    if (computer == "scissors"){
      rsltMsg = losingMsg;
    } else if (computer == "rock" ) {
      rsltMsg = winningMsg;
    } else {
      rsltMsg = tyingMsg;
    }
  } else if (playerThrow == "scissors"){
    if (computer == "paper"){
      rsltMsg = winningMsg;
    } else if (computer == "rock" ) {
      rsltMsg = losingMsg;
    } else {
      rsltMsg = tyingMsg;
    }
  }   
};