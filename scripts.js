/* TO DO
1. Make a landing/loading screen?
2. Figure out how to make sound files play onclick
using addEventListener and not onclick="" in the markup
*/

/* ==========================
Initialize game's inputs.
 App doesn't run without this.
=============================*/

let computer = null;
//let playerThrow = null; Does not need to be initialized
let plyrScr = 0;
let compScr = 0;
//let leader = 0; Does not need to be initialized
//let gmOvr = null; Does not need to be initialized

// Initialize some values. App would still run but have empty results.
const winningMsg = "You WIN this round!";
const losingMsg = "You LOSE this round!";
const tyingMsg = "TIE, throw again!";

// Create an array for the computer to choose from.
const throwOptions = ["rock", "paper", "scissors"];

// Pick a random index from throwOptions array, which returns its value.
function getComputerThrow(){
  return throwOptions[Math.floor(Math.random() * throwOptions.length)];
}


/* ======================================
Instead of text input for the Player, use
buttons and get their value in a for loop
======================================= */

// Select all buttons inside a .choices class
// This limits the scope and saves resources AFAIK
const choices = document.querySelector('.choices');
const btns = choices.querySelectorAll('button');

/* This records the players's throw. Using a for Each 
loop to add a VALUE event listener to all buttons inside 
the .choices class, assigning the value as the playerThrow */
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

  // Score variables and assignment
  let playerScore = document.getElementById('player-score')
  let computerScore = document.getElementById('computer-score')

  if (playerThrow === computer){
    rsltMsg = tyingMsg
  } else if (playerThrow == "rock"){
    if (computer == "scissors"){
      rsltMsg = winningMsg
      ++plyrScr
    } else if (computer == "paper") {
      rsltMsg = losingMsg
      ++compScr
    }
  } else if (playerThrow == "paper"){
    if (computer == "rock"){
      rsltMsg = winningMsg
      ++plyrScr
    } else if (computer == "scissors") {
      rsltMsg = losingMsg
      ++compScr
    }
  } else if (playerThrow == "scissors"){
    if (computer == "paper"){
      rsltMsg = winningMsg
      ++plyrScr
    } else if (computer == "rock") {
      rsltMsg = losingMsg
      ++compScr
    }
  }
  
  playerScore.textContent = plyrScr.toString();
  computerScore.textContent = compScr.toString();
  
  // When someone hits 5 points, end the game.
  weHaveAWinner();

};
/* =========================
End of playRound() function
========================= */

/* ==========================================
for Each loop to add a RESULTS MESSAGE event 
listener to buttons and show who won the round.
========================================== */
btns.forEach(function (rm) {
  rm.addEventListener('click', function() {
    // Assign a different color based on Win, Tie, Loss
    // And also throw the computer's choice.
    let resultsMessage = document.getElementById("result-msg");
    let computerMessage = document.getElementById("computer-throw");
    
    if (rsltMsg == winningMsg){
      resultsMessage.style.color = "darkgreen";
    } else if (rsltMsg == tyingMsg) {
      resultsMessage.style.color = "darkblue";
    } else if (rsltMsg == losingMsg) {
      resultsMessage.style.color = "#f91c1c"; // red
    };
    
    // Display the result of the round and computer's choice.
    resultsMessage.textContent = rsltMsg;
    computerMessage.innerHTML = `The computer threw <span style='color: lightcoral; background-color: black; border-radius: 5px; padding: 2px 12px 5px 12px;'>${computer}</span>.`
    // "The computer threw " + "<span style='color: lightcoral;'>" + computer + "</span>";
    

    /* 
    Reset animation every click. Clone the results 
    message then replace the old with the clone! 
    */
    let newResultsMessage = resultsMessage.cloneNode(true);
    resultsMessage.parentNode.replaceChild(newResultsMessage, resultsMessage);

    // Repeat the reset for Computer throw animation
    let newcomputerMessage = computerMessage.cloneNode(true);
    computerMessage.parentNode.replaceChild(newcomputerMessage, computerMessage);
    
  });
});

// Calculate who's in the lead
function calcLeader(){
  if (plyrScr >= compScr){
    leader = plyrScr;
  } else if (compScr >= plyrScr){
    leader = compScr;
  }
  return leader;
};

/* We have a winner. This is called at the end of
the big playRound()function. */
function weHaveAWinner(){

  // Calucalte who's currently in the lead
  calcLeader();
  
  // Be ready to end if someone wins
  let gameOver = document.getElementById("game-over-modal");
  let gameOverMsg = document.getElementById("game-over-msg");

  if (leader == 5 && leader == plyrScr){
    gmOvr = "Congratulations, You WON!";
    gameOverMsg.textContent = gmOvr;
    gameOver.style.display = 'block';
  } else if (leader == 5 && leader == compScr){
    gmOvr = "Sorry, you LOST to the computer!";
    gameOverMsg.textContent = gmOvr;
    gameOver.style.display = 'block';
  }
};