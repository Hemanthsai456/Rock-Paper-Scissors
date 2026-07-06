const choices = ["rock", "paper", "scissors"];

let playerScore = 0;
let computerScore = 0;

const playerScoreText = document.getElementById("playerScore");
const computerScoreText = document.getElementById("computerScore");

const playerChoiceText = document.getElementById("playerChoice");
const computerChoiceText = document.getElementById("computerChoice");

const resultText = document.getElementById("result");

const choiceButtons = document.querySelectorAll(".choice");

const resetBtn = document.getElementById("resetBtn");

// Computer Random Choice

function getComputerChoice() {

    const randomIndex = Math.floor(Math.random() * choices.length);

    return choices[randomIndex];

}

// Winner Logic

function getWinner(player, computer) {

    if (player === computer) {
        return "draw";
    }

    if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    ) {
        return "player";
    }

    return "computer";

}

// Play Round

function playGame(playerChoice) {

    const computerChoice = getComputerChoice();

    playerChoiceText.textContent = playerChoice;
    computerChoiceText.textContent = computerChoice;

    const winner = getWinner(playerChoice, computerChoice);

    if (winner === "player") {

        playerScore++;

        resultText.textContent = "🎉 You Win This Round!";

    }

    else if (winner === "computer") {

        computerScore++;

        resultText.textContent = "💻 Computer Wins This Round!";

    }

    else {

        resultText.textContent = "🤝 It's a Draw!";

    }

    updateScore();

}

// Update Score

function updateScore() {

    playerScoreText.textContent = playerScore;

    computerScoreText.textContent = computerScore;

}

// Reset

function resetGame() {

    playerScore = 0;

    computerScore = 0;

    updateScore();

    playerChoiceText.textContent = "-";

    computerChoiceText.textContent = "-";

    resultText.textContent = "Choose your move!";

}

// Event Listeners

choiceButtons.forEach(button => {

    button.addEventListener("click", () => {

        const playerChoice = button.dataset.choice;

        playGame(playerChoice);

    });

});

resetBtn.addEventListener("click", resetGame);