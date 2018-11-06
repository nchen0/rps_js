function computerPlay() {
  let random = Math.floor(Math.random() * 3) + 1;
  if (random === 1) {
    return "rock";
  } else if (random === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" || playerSelection === "Rock") {
    if (computerSelection === "rock") {
      return "Tie!";
    } else if (computerSelection === "paper") {
      return "You lose! Paper beats Rock!";
    } else {
      return "You Win!";
    }
  }
}

const playerSelection = prompt("Rock, Paper, or Scissors: ");
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

function game() {}
