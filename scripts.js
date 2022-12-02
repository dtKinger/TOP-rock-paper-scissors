/* TO DO
2. Figure out how to count a win and keep score for Player and Computer
3. Figure how to End the game when one hits 5 wins.
4. Allow for a game reset / Try again.
*/

// Initialize game's inputs. App doesn't run without this.
let computer = null;
let playerThrow = null;
let plyrScr = 0;
let compScr = 0;

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

/* ==========================================
for Each loop to add a RESULTS MESSAGE event 
listener to buttons (for bonus marks!)
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
      resultsMessage.style.color = "#f91c1c";
    };
    
    resultsMessage.textContent = rsltMsg;
    computerMessage.textContent = `The computer throws ${computer}.`;
    

    /* 
    Reset animation every click. Clone the results message
    then replace the old with the clone! 
    */
    let newResultsMessage = resultsMessage.cloneNode(true);
    resultsMessage.parentNode.replaceChild(newResultsMessage, resultsMessage);

    // Repeat the reset for Computer throw animation
    let newcomputerMessage = computerMessage.cloneNode(true);
    computerMessage.parentNode.replaceChild(newcomputerMessage, computerMessage);
    


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
};