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

humanChoice.addEventListener("click", (e) => {
  play(e);
});

getScoreDisplay(humanScore, computerScore);

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

function getHumanChoice(chosen) {
  switch (chosen) {
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

function getScoreDisplay(humScore, compScore) {
  humanScoreDisplay.innerText = `Your Score: ${humScore}`;
  computerScoreDisplay.innerText = `Computer Score: ${compScore}`;
}

function play(e) {
  let target = e.target.id;
  let isHumanWin;
  let roundResult;

  roundResult = playRound(target);

  if (roundResult) {
    humanScore++;
  } else if (roundResult === false) {
    computerScore++;
  }

  if (humanScore === 5 || computerScore === 5) {
    if (humanScore > computerScore) {
      isHumanWin = true;
    } else {
      isHumanWin = false;
    }
    finishedGame(isHumanWin);
    return;
  }

  getScoreDisplay(humanScore, computerScore);
}

function playRound(humanChoice) {
  const messageElement = document.createElement("p");
  let isHumanWinRound = null;
  let message = "";
  let computerChoice = getComputerChoice();
  let humanChosen = getHumanChoice(humanChoice);
  let choice = `Your choice: ${humanChosen} \nComputer choice: ${computerChoice}`;

  if (humanChosen === computerChoice) {
    message = "A Complete draw";
  } else if (
    (humanChosen === ROCK && computerChoice === SCISSOR) ||
    (humanChosen === SCISSOR && computerChoice === PAPER) ||
    (humanChosen === PAPER && computerChoice === ROCK)
  ) {
    message = "You WIN! Congratulation!";
    isHumanWinRound = true;
  } else {
    message = "You Lose! booo!";
    isHumanWinRound = false;
  }

  messageElement.innerText = choice + "\n" + message;
  resultElement.appendChild(messageElement);
  return isHumanWinRound;
}

function finishedGame(gameResult) { //runs after one score == 5;
  rockButton.disabled = true;
  paperButton.disabled = true;
  scissorButton.disabled = true;
  randomButton.disabled = true;

  let endMessage = document.createElement("p");

  getScoreDisplay(humanScore, computerScore);

  if (gameResult) {
    endMessage.innerText = "YOU WON! CONGRATULATIONS!";
  } else {
    endMessage.innerText = "YOU LOSE! TRY AGAIN!";
  }

  resultElement.appendChild(endMessage);

  const clearGameLog = document.createElement("button");
  clearGameLog.innerText = "Clear Log";
  resultElement.appendChild(clearGameLog);
  clearGameLog.addEventListener("click", () => {
    resultElement.textContent = "";
    humanScore = 0;
    computerScore = 0;

    getScoreDisplay(humanScore, computerScore);

    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorButton.disabled = false;
    randomButton.disabled = false;
  });
}
