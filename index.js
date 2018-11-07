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
  let computerscore = Number(document.querySelector(".computerscore").textContent);
  let playerscore = Number(document.querySelector(".playerscore").textContent);
  let text_computerscore = document.querySelector(".computerscore");
  let text_playerscore = document.querySelector(".playerscore");
  if (computerscore < 5 && playerscore < 5) {
    if (playerSelection === "Rock") {
      if (computerSelection === "rock") {
        return "Tie!";
      } else if (computerSelection === "paper") {
        computerscore = computerscore + 1;
        text_computerscore.textContent = computerscore.toString();
      } else {
        playerscore = playerscore + 1;
        text_playerscore.textContent = playerscore.toString();
      }
    } else if (playerSelection === "Paper") {
      if (computerSelection === "rock") {
        playerscore = playerscore + 1;
        text_playerscore.textContent = playerscore.toString();
      } else if (computerSelection === "paper") {
        return "Tie!";
      } else {
        computerscore = computerscore + 1;
        text_computerscore.textContent = computerscore.toString();
      }
    } else {
      if (computerSelection === "rock") {
        computerscore = computerscore + 1;
        text_computerscore.textContent = computerscore.toString();
      } else if (computerSelection === "paper") {
        playerscore = playerscore + 1;
        text_playerscore.textContent = playerscore.toString();
      } else {
        return "Tie!";
      }
    }
  } else {
    return;
  }
  determineWinner();
}

function game() {
  const playerSelection = prompt("Rock, Paper, or Scissors: ");
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));
}

let startbtn = document.querySelector(".start");
startbtn.addEventListener("click", () => {
  if (startbtn.textContent === "Start") {
    startbtn.textContent = "Stop";
  } else {
    startbtn.textContent = "Start";
  }
});

rps_buttons = document.querySelectorAll(".rps");
rps_buttons.forEach(button => {
  button.addEventListener("click", () => {
    playRound(button.textContent, computerPlay());
  });
});

// Win Game:
function determineWinner() {
  let playerscore = document.querySelector(".playerscore");
  let computerscore = document.querySelector(".computerscore");
  console.log("playerscore.textContent is: ", playerscore.textContent);
  if (playerscore.textContent === "5") {
    alert("You have won!");
  } else if (computerscore.textContent === "5") {
    alert("You have lost!");
  }
}
