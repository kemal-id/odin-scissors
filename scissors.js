const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSOR = "SCISSOR";

let HUMAN_SCORE = 0;
let COMPUTER_SCORE = 0;

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

function getHumanChoice() {
  let message =
    "write 1 for Rock, 2 for Scissors, 3 for Paper, otherwise it's random";
  let humanChoice = window.prompt(message);
  let intHumanChoice = parseInt(humanChoice);

  switch (intHumanChoice) {
    case 1:
      return ROCK;
    case 2:
      return SCISSOR;
    case 3:
      return PAPER;
    default:
      return getComputerChoice();
  }
}

function playRound(humanChoice, computerChoice) {
  console.log("Your choice: " + humanChoice);
  console.log("Computer choice: " + computerChoice);
  let message = "";

  if (
    (humanChoice === ROCK && computerChoice === ROCK) ||
    (humanChoice === PAPER && computerChoice === PAPER) ||
    (humanChoice === SCISSOR && computerChoice === SCISSOR)
  ) {
    message = "A Complete draw";
  } else if (
    (humanChoice === ROCK && computerChoice === SCISSOR) ||
    (humanChoice === SCISSOR && computerChoice === PAPER) ||
    (humanChoice === PAPER && computerChoice === ROCK)
  ) {
    message = "You WIN! Congratulation!";
    HUMAN_SCORE++;
  } else if (
    (computerChoice === SCISSOR && humanChoice === PAPER) ||
    (computerChoice === ROCK && humanChoice === SCISSOR) ||
    (computerChoice === PAPER && humanChoice === ROCK)
  ) {
    message = "You Lose! booo!";
    COMPUTER_SCORE++;
  } else {
    message = "Uuh, something is wrong";
  }

  console.log(message);
  console.log("Your score: " + HUMAN_SCORE);
  console.log("Computer score: " + COMPUTER_SCORE);
}

//Uhh, maybe I could optimize these ifs?

playRound(getHumanChoice(), getComputerChoice());
