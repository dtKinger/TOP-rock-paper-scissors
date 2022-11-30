const throwOptions = ["rock", "paper", "scissors"];

function getComputerThrow(){
  return throwOptions[Math.floor(Math.random() * throwOptions.length)];
}

// const playerThrow = "rock";

/* Try #1 - learned that I should be using a for loop.
let rock = document.getElementById("rockid");
let paper = document.getElementById("paperid");
let scissors = document.getElementById("scissorsid");

rock.addEventListener("click", playerThrow);
paper.addEventListener("click", playerThrow);
scissors.addEventListener("click", playerThrow);

function playerThrow(){
  return rock.getAttribute('data-element');
};
*/

let btns = document.querySelectorAll('button');

btns.forEach(function (i) {
  i.addEventListener('click', function(){
    i.getAttribute('data-element');
  });
});

function playRound(player, computer){

  player = btns;
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