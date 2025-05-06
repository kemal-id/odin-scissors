// I used global variable because these are constant, and used across functions.
const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSOR = "SCISSOR";

const humanScoreDisplay = document.querySelector("#human-score");
const computerScoreDisplay = document.querySelector("#computer-score");
const humanChoice = document.querySelector("#human-choice");
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorButton = document.querySelector("#scissor");
const randomButton = document.querySelector("#random");
const resultElement = document.querySelector("#result");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let mathChance = Math.random().toFixed(3);

  if (mathChance <= 0.333) {
    return ROCK;
  } else if (mathChance > 0.333 && mathChance <= 0.666) {
    return PAPER;
  } else {
    return SCISSOR;
  }
}
humanChoice.addEventListener("click", playGame);

function getHumanChoice(targetId) {
  switch (targetId) {
    case "rock":
      return ROCK;
    case "scissor":
      return SCISSOR;
    case "paper":
      return PAPER;
    case "random":
      return getComputerChoice();
    default:
      return;
  }
}

function playGame(e) {
  if (humanScore === 5 || computerScore === 5) {
    let isHumanWin;
    if (humanScore > computerScore) {
      isHumanWin = true;
    } else {
      isHumanWin = false;
    }
    finishedGame(isHumanWin);
  }

  const messageElement = document.createElement("p");

  let message = "";
  let computerChoice = getComputerChoice();
  let humanChosen = getHumanChoice(e.target.id);
  let choice = `Your choice: ${humanChosen} \nComputer choice: ${computerChoice}`;

  if (humanChosen === computerChoice) {
    message = "A Complete draw";
  } else if (
    (humanChosen === ROCK && computerChoice === SCISSOR) ||
    (humanChosen === SCISSOR && computerChoice === PAPER) ||
    (humanChosen === PAPER && computerChoice === ROCK)
  ) {
    message = "You WIN! Congratulation!";
    humanScore++;
  } else {
    message = "You Lose! booo!";
    computerScore++;
  }

  humanScoreDisplay.innerText = `Your Score: ${humanScore}`;
  computerScoreDisplay.innerText = `Computer Score: ${computerScore}`;
  messageElement.innerText = choice + "\n" + message;
  resultElement.appendChild(messageElement);
}

function finishedGame(isHumanWin) {
  rockButton.disabled = true;
  paperButton.disabled = true;
  scissorButton.disabled = true;
  randomButton.disabled = true;

  let endMessage = document.createElement("p");

  if (isHumanWin) {
    endMessage.innerText = "YOU WON! CONGRATULATIONS!";
  } else {
    endMessage.innerText = "YOU LOSE! TRY AGAIN!";
  }

  resultElement.appendChild(endMessage);

  const clearGameLog = document.createElement("button");
  clearGameLog.innerText = "Clear Log";
  resultElement.appendChild(clearGameLog);
  clearGameLog.addEventListener("click", (e) => {
    resultElement.textContent = "";
    humanScore = 0;
    computerScore = 0;

    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorButton.disabled = false;
    randomButton.disabled = false;
  });
}

// function playGame() {
//   let humanScore = 0;
//   let computerScore = 0;
//   let numberOfPlayedRound = 0;
//   while (numberOfPlayedRound < 5) {
//     let resultRound = playRound(getHumanChoice(), getComputerChoice());
//     switch (resultRound) {
//       case true:
//         humanScore++;
//         numberOfPlayedRound++;
//         break;
//       case false:
//         computerScore++;
//         numberOfPlayedRound++;
//         break;
//       default:
//         numberOfPlayedRound++;
//     }

//     let resultMessage = `Number of round played ${numberOfPlayedRound} \nYour score: ${humanScore} \nComputer score: ${computerScore}`;
//     console.log(resultMessage);
//   }
// }

// playGame();
//i chose to put playRound() outside of playGame() because i wanted it to be able to run on its own
//without playGame().
