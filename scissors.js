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

function playRound(humanChoice, computerChoice) {
  let choice = `Your choice: ${humanChoice} \nComputer choice: ${computerChoice}`;
  let message = "";
  let isHumanWin;

  if (
    (humanChoice === ROCK && computerChoice === ROCK) ||
    (humanChoice === PAPER && computerChoice === PAPER) ||
    (humanChoice === SCISSOR && computerChoice === SCISSOR)
  ) {
    message = "A Complete draw";
    isHumanWin = null;
  } else if (
    (humanChoice === ROCK && computerChoice === SCISSOR) ||
    (humanChoice === SCISSOR && computerChoice === PAPER) ||
    (humanChoice === PAPER && computerChoice === ROCK)
  ) {
    message = "You WIN! Congratulation!";
    isHumanWin = true;
  } else if (
    (computerChoice === SCISSOR && humanChoice === PAPER) ||
    (computerChoice === ROCK && humanChoice === SCISSOR) ||
    (computerChoice === PAPER && humanChoice === ROCK)
  ) {
    message = "You Lose! booo!";
    isHumanWin = false;
  } else {
    message = "Uuh, something is wrong";
  }

  console.log(choice + "\n" + message);
  return isHumanWin;
}

//Uhh, maybe I could optimize these ifs?

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let numberOfPlayedRound = 0;
  while (numberOfPlayedRound < 5) {
    let resultRound = playRound(getHumanChoice(), getComputerChoice());
    switch (resultRound) {
      case true:
        humanScore++;
        numberOfPlayedRound++;
        break;
      case false:
        computerScore++;
        numberOfPlayedRound++;
        break;
      default:
        numberOfPlayedRound++;
    }

    let resultMessage = `Number of round played ${numberOfPlayedRound} \nYour score: ${humanScore} \nComputer score: ${computerScore}`;
    console.log(resultMessage);
  }
}

playGame();
