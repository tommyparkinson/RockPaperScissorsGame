var playerScore = 0;
var computerScore = 0;

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

const updatePlayerScore = document.getElementById("playerScore");
const updateComputerScore = document.getElementById("computerScore");

const updatePlayerChoice = document.getElementById("playerChoice");
const updateComputerChoice = document.getElementById("computerChoice");

const updateWinner = document.getElementById("winner");

rock.addEventListener("click", function () {
  const playerHand = 0;
  const computerHand = computerOption(playerHand);

  handWinner(playerHand, computerHand);
});
paper.addEventListener("click", function () {
  const playerHand = 1;
  const computerHand = computerOption(playerHand);

  handWinner(playerHand, computerHand);
});
scissors.addEventListener("click", function () {
  const playerHand = 2;
  const computerHand = computerOption(playerHand);

  handWinner(playerHand, computerHand);
});

function computerOption() {
  const computerHand = Math.floor(Math.random() * 3);
  return computerHand;
}

function handWinner(playerHand, computerHand) {
  updatePlayerChoice.innerHTML = findPlayerHand(playerHand);
  updateComputerChoice.innerHTML = findPlayerHand(computerHand);

  if (playerHand == computerHand) {
    updateWinner.innerHTML = "Tie";
  } else if (
    (playerHand == 0 && computerHand == 1) ||
    (playerHand == 1 && computerHand == 2) ||
    (playerHand == 2 && computerHand == 0)
  ) {
    computerScore += 1;
    updateWinner.innerHTML = "Computer Wins!";
    updateComputerScore.innerHTML = "" + computerScore;
  } else {
    playerScore += 1;
    updateWinner.innerHTML = "Player Wins!";
    updatePlayerScore.innerHTML = playerScore;
  }
}

function findPlayerHand(hand) {
  if (hand == 0) {
    return "Rock";
  } else if (hand == 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}
