const resultText = document.getElementById('result-text');
const playerScoreDisplay = document.getElementById('player-score');
const computerScoreDisplay = document.getElementById('computer-score');

let playerScore = 0;
let computerScore = 0;
const winningScore = 5; // Change this to your desired winning score

const choices = ['rock', 'paper', 'scissors'];

const playRound = (playerChoice) => {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    if (playerChoice === computerChoice) {
        resultText.textContent = `It's a draw! Both chose ${playerChoice}.`;
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        resultText.textContent = `You win! ${playerChoice} beats ${computerChoice}.`;
        playerScore++;
    } else {
        resultText.textContent = `You lose! ${computerChoice} beats ${playerChoice}.`;
        computerScore++;
    }
    
    // Update scores on the webpage
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;

    // Check if a player has reached the winning score
    if (playerScore === winningScore) {
        resultText.textContent = "Congratulations! You've won the game!";
    } else if (computerScore === winningScore) {
        resultText.textContent = "Sorry, you've lost the game!";
    }
};
