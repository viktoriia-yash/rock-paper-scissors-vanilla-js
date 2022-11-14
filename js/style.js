let winners = [];
const choices = ["rock", "paper", "scissors"];

function startGame() {
  playRound();
  setWins();
}

function playRound(round) {
  const computerChoice = computerSelect();

  const winner = checkWinner(playerChoice, computerChoice);

  winners.push(winner);
}

function computerSelect() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function checkWinner(choice1, choice2) {
  if (
    (choice1 == "rock" && choice2 == "scissors") ||
    (choice1 == "scissors" && choice2 == "paper") ||
    (choice1 == "paper" && choice2 == "rock")
  ) {
    return "Player";
  } else if (choice1 == choice2) {
    return "Tie";
  } else {
    return "Computer";
  }
}

function setWins() {
  const pWinCount = winners.filter((item) => item == "Player").length;
  const cWinCount = winners.filter((item) => item == "Computer").length;
  const ties = winners.filter((item) => item == "Tie").length;
}
