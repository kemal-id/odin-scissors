const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSOR = "SCISSOR";

function getComputerChoice() {
  let mathChance = Math.random();
  // console.log(mathChance);

  if (mathChance <= 0.333) {
    return ROCK;
  } else if (mathChance > 0.333 && mathChance <= 0.666) {
    return PAPER;
  } else {
    return SCISSOR;
  }
}