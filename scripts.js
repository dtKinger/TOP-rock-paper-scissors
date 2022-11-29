let throwOptions = ["rock", "paper", "scissors"];

function getComputerChoice(){
  const compThrow = throwOptions[Math.floor(Math.random() * throwOptions.length)];
  console.log(compThrow);
}