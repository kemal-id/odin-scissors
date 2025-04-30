const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSOR = "SCISSOR";

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
