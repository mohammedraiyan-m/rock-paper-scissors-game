const resultDiv = document.getElementById("result");
const scoreDiv = document.getElementById("score");
const winnerDiv = document.getElementById("winner");
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

let humanScore = 0;
let computerScore = 0;
const winningScore = 5;

// Computer choice
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "tie";
  }

  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    return "human";
  } else if (
    (humanChoice === "scissors" && computerChoice === "rock") ||
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors")
  ) {
    return "computer";
  }
}

// Handle player choice
function handleChoice(humanChoice) {
  if (humanScore >= winningScore || computerScore >= winningScore) return;

  const computerChoice = getComputerChoice();

  const result = playRound(humanChoice, computerChoice);

  // Update scores
  if (result === "human") {
    humanScore++;
  } else if (result === "computer") {
    computerScore++;
  }

  // Update result
  if (result === "tie") {
    resultDiv.textContent = `It's a tie! You both chose ${humanChoice}.`;
  } else if (result === "human") {
    resultDiv.textContent = `🥇You win! ${humanChoice} beats ${computerChoice}.`;
  } else {
    resultDiv.textContent = `😔You lose! ${computerChoice} beats ${humanChoice}.`;
  }

  scoreDiv.textContent = `You: ${humanScore} | Computer: ${computerScore}`;

  //  winner in human or computer select
  if (humanScore === winningScore) {
    winnerDiv.textContent = "🎉 You Win The Game!";
  } else if (computerScore === winningScore) {
    winnerDiv.textContent = "🤖 Computer Wins The Game!";
  }
}

rockBtn.addEventListener("click", () => handleChoice("rock"));
paperBtn.addEventListener("click", () => handleChoice("paper"));
scissorsBtn.addEventListener("click", () => handleChoice("scissors"));

//button reset
const btnreset = document.getElementById("reset");
btnreset.addEventListener("click", () => {
  window.location.reload();
});

//style
document.getElementById("title-name").style.cssText = "text-align:center;";
document.getElementById("para").style.cssText = "text-align:center;";
document.getElementById("result").style.cssText =
  "text-align:center; padding: 10px";
document.getElementById("score").style.cssText =
  "text-align:center; padding: 10px";
document.getElementById("winner").style.cssText =
  "text-align:center; padding: 10px";

document.getElementById("rock").style.cssText =
  "padding: 10px 20px; border-radius: 8px";
document.getElementById("paper").style.cssText =
  "padding: 10px 20px;border-radius: 8px";
document.getElementById("scissors").style.cssText =
  "padding: 10px 20px;border-radius: 8px";
document.getElementById("reset").style.cssText =
  "padding: 10px 20px;border-radius: 8px";
