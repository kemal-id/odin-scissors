// I used global variable because these are constant, and used across functions.
const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSOR = "SCISSOR";

const humanChoice = document.querySelector("#human-choice");
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorButton = document.querySelector("#scissor");

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
humanChoice.addEventListener("click", playRound);

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

function playRound(e) {
  const resultElement = document.querySelector("#result");
  const messageElement = document.createElement("p");
  let message = "";
  let computerChoice = getComputerChoice();
  let humanChosen = getHumanChoice(e.target.id);
  let choice = `Your choice: ${humanChosen} \nComputer choice: ${computerChoice}`;
  // let isHumanWin;


  //actually, i used === && on all conditions and after I was done i looked to community solutions
  //and optimized it.
  if (humanChosen === computerChoice) {
    message = "A Complete draw";
    // isHumanWin = null;
  } else if (
    (humanChosen === ROCK && computerChoice === SCISSOR) ||
    (humanChosen === SCISSOR && computerChoice === PAPER) ||
    (humanChosen === PAPER && computerChoice === ROCK)
  ) {
    message = "You WIN! Congratulation!";
    // isHumanWin = true;
  } else {
    message = "You Lose! booo!";
    // isHumanWin = false;
  }

  // console.log();
  messageElement.innerText = choice + "\n" + message;
  resultElement.appendChild(messageElement);

  // return isHumanWin;
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
