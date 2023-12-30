// Initialize scores
let playerScore = 0;
let computerScore = 0;


// Get the buttons and result display element
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const resultDisplay = document.getElementById('result');
const playerScoreDisplay = document.getElementById('playerScore');
const computerScoreDisplay = document.getElementById('computerScore');
const gameOverDisplay = document.getElementById('gameOver');

// Add event listeners to the buttons
rockButton.addEventListener('click', () => playRound('rock'));
paperButton.addEventListener('click', () => playRound('paper'));
scissorsButton.addEventListener('click', () => playRound('scissors'));

// Function to generate computer's choice
function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to determine the winner of a round
function playRound(playerSelection) {
    const resultDisplay = document.getElementById('result');

    // Check if the elements are found before attempting to update them
    if (!resultDisplay || !playerScoreDisplay || !computerScoreDisplay) {
        console.error('Result or score display not found!');
        return;
    }

    const computerSelection = computerPlay();

    // Compare player and computer choices to determine the winner
    if (playerSelection === computerSelection) {
        resultDisplay.textContent = `It's a tie! Computer picked ${computerSelection}.`;
        playerScore++;
        computerScore++;
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        resultDisplay.textContent = `You win! Computer picked ${computerSelection}.`;
        playerScore++;
    } else {
        resultDisplay.textContent = `You lose! Computer picked ${computerSelection}.`;
        computerScore++;
    }

    // Update the score displays
    playerScoreDisplay.textContent = `Your Score: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;

    // Check if 5 rounds have been played
    if (playerScore === 5 || computerScore === 5) {
        endGame();
    }
}

// Function to end the game
function endGame() {
    // Display "Game Over" message on the screen
    if (gameOverDisplay) {
        if (playerScore > computerScore) {
            gameOverDisplay.textContent = 'You win the game!';
        } else if (playerScore < computerScore) {
            gameOverDisplay.textContent = 'You lose the game!';
        } else {
            gameOverDisplay.textContent = 'It\'s a tie!';
        }

    }

    // Optionally, hide the game buttons when the game is over
    rockButton.style.display = 'none';
    paperButton.style.display = 'none';
    scissorsButton.style.display = 'none';
    resultDisplay.style.display = 'none';

    // Reset the game after 3 seconds
    setTimeout(resetGame, 4000);

    
}

// Function to reset the game
function resetGame() {
    if (resultDisplay) {
        resultDisplay.textContent = 'Result:';
    }

    // Reset scores and rounds
    playerScore = 0;
    computerScore = 0;
   

    // Clear the "Game Over" message
    if (gameOverDisplay) {
        gameOverDisplay.textContent = '';
    }

    // Optionally, show the game buttons again
    rockButton.style.display = 'inline-block';
    paperButton.style.display = 'inline-block';
    scissorsButton.style.display = 'inline-block';
    resultDisplay.style.display = 'block';


    // Reset the score displays
    playerScoreDisplay.textContent = `Your Score: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
}
