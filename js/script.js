const game = () => {
  let pScore = 0;
  let cScore = 0;
  let moves = 0;

  const playGame = () => {
    const rockBtn = document.querySelector(".rock");
    const paperBtn = document.querySelector(".paper");
    const scissorBtn = document.querySelector(".scissor");

    const playerOptions = [rockBtn, paperBtn, scissorBtn];
    const computerOptions = ["rock", "paper", "scissors"];

    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");

    // Start the game
    playerOptions.forEach((option) => {
      option.addEventListener("click", function () {
        const movesLeft = document.querySelector(".movesleft");
        moves++;
        movesLeft.innerText = `${5 - moves}`;

        const choiceNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[choiceNumber];

        // Show images based on the player' and computer's decision
        playerHand.src = `./img/${this.textContent}.svg`;
        computerHand.src = `./img/${computerChoice}.svg`;

        // Check who wins
        winner(this.innerText, computerChoice);

        // Next step when the 5 rounds ended
        if (moves == 5) {
          gameOver(playerOptions, movesLeft);
        }
      });
    });
  };

  // Function to decide who is winner
  const winner = (player, computer) => {
    const result = document.querySelector(".result");
    const pScoreBoard = document.querySelector(".pScoreNumber");
    const cScoreBoard = document.querySelector(".cScoreNumber");

    player = player.toLowerCase();
    computer = computer.toLowerCase();

    if (player === computer) {
      result.textContent = "Tie";
    } else if (player == "rock") {
      if (computer == "paper") {
        result.textContent = "Computer Won";
        cScore++;
        cScoreBoard.textContent = cScore;
      } else {
        result.textContent = "Player Won";
        pScore++;
        pScoreBoard.textContent = pScore;
      }
    } else if (player == "scissors") {
      if (computer == "rock") {
        result.textContent = "Computer Won";
        cScore++;
        cScoreBoard.textContent = cScore;
      } else {
        result.textContent = "Player Won";
        pScore++;
        pScoreBoard.textContent = pScore;
      }
    } else if (player == "paper") {
      if (computer == "scissors") {
        result.textContent = "Computer Won";
        cScore++;
        cScoreBoard.textContent = cScore;
      } else {
        result.textContent = "Player Won";
        pScore++;
        pScoreBoard.textContent = pScore;
      }
    }
  };

  // What to do when player finished game
  const gameOver = (playerOptions) => {
    const chooseMove = document.querySelector(".move");
    const roundResult = document.querySelector(".roundResult");
    const newGameBtn = document.querySelector(".newGame");

    // When the game is over, we need to make buttons unclickable
    playerOptions.forEach((option) => {
      option.disabled = true;
    });

    // We need to show it on the screen when the game is over
    // First header
    chooseMove.innerText = "Game Over";

    // Second header
    if (pScore > cScore) {
      roundResult.innerText = "You won the game";
    } else if (pScore < cScore) {
      roundResult.innerText = "You lost the game, computer won";
    } else {
      roundResult.innerText = "The match ended in a draw ";
    }

    newGameBtn.addEventListener("click", () => {
      window.location.reload();

      // When player clicks "New game", all buttons become clickable again
      playerOptions.forEach((option) => {
        option.disabled = false;
      });
    });
  };

  playGame();
};

game();
