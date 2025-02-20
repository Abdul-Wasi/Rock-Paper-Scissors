let moves = ["rock", "paper", "scissors"];
let playerMove = "";
let compMove = "";
let msg = document.querySelector(".msg");
let playerScore = document.querySelector(".user-score");
let computerScore = document.querySelector(".comp-score");
let resetBtn = document.querySelector(".resetBtn");

let userScore = 0;
let compScore = 0;

let opt1 = document.querySelector("#rock");
let opt2 = document.querySelector("#paper");
let opt3 = document.querySelector("#scissors");

function checkWinner() {
  let int = Math.floor(Math.random() * 3);
  compMove = moves[int];

  if (playerMove === compMove) {
    msg.textContent = "It's a draw!";
    return;
  }

  if (playerMove === "rock") {
    if (compMove === "paper") {
      msg.textContent = `You lose ${compMove} beats ${playerMove}!`;
      compScore++;
      computerScore.textContent = compScore;
    } else if (compMove === "scissors") {
      msg.textContent = `You win ${playerMove} beats ${compMove}!`;
      userScore++;
      playerScore.textContent = userScore;
    }
  } else if (playerMove === "paper") {
    if (compMove === "scissors") {
      msg.textContent = `You lose ${compMove} beats ${playerMove}!`;
      compScore++;
      computerScore.textContent = compScore;
    } else if (compMove === "rock") {
      msg.textContent = `You win ${playerMove} beats ${compMove}!`;
      userScore++;
      playerScore.textContent = userScore;
    }
  } else if (playerMove === "scissors") {
    if (compMove === "rock") {
      msg.textContent = `You lose ${compMove} beats ${playerMove}!`;
      compScore++;
      computerScore.textContent = compScore;
    } else if (compMove === "paper") {
      msg.textContent = `You win ${playerMove} beats ${compMove}!`;
      userScore++;
      playerScore.textContent = userScore;
    }
  }
}

opt1.addEventListener("click", () => {
  playerMove = "rock";
  checkWinner();
});

opt2.addEventListener("click", () => {
  playerMove = "paper";
  checkWinner();
});

opt3.addEventListener("click", () => {
  playerMove = "scissors";
  checkWinner();
});

resetBtn.addEventListener("click", () => {
  userScore = 0;
  compScore = 0;
  playerScore.textContent = userScore;
  computerScore.textContent = compScore;
  msg.textContent = "Pick Your Move!";
});
