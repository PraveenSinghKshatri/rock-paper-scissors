const choices = ["rock", "paper", "scissors"];
const winners = [];

function game() {
    for (i = 1; i <= 5; i++) {
        playRound(i);
    }
    document.querySelector("button").textContent = "Play Again";
    logWins()
}

function playRound(round) {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    console.log(winner);
    winners.push(winner);
    logRound(playerSelection, computerSelection, winner, round);
}

function playerChoice() {
    let input = prompt("Type Rock, Paper, Scissors");
    while (input == null) {
        input = prompt("Type Rock, Paper, Scissors");
    }
    input = input.toLowerCase();
    let check = validateInput(input);
    while (check == false) {
        input = prompt(
            "Type Rock, Paper, Scissors. Please check your spelling and try again."
        );
        while (input == null) {
            input = prompt("Type Rock, Paper, Scissors");
        };

        input = input.toLowerCase();
        check = validateInput(input);

    };
    return input;
    // console.log(input);
}

function computerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function validateInput(choice) {
    return choices.includes(choice)
}

function checkWinner(choiceP, choiceC) {
    if (choiceP === choiceC) {
        return "Tie";
    } else if (
        (choiceP === "rock" && choiceC === "scissors") ||
        (choiceP === "scissors" && choiceC === "paper") ||
        (choiceP === "paper" && choiceC === "rock")
    ) {
        return "Player";
    } else {
        return "Computer";
    }

}

function logWins() {
    let playerWins = winners.filter((item) => item == "Player").length;
    let computerWins = winners.filter((item) => item == "Computer").length;
    let ties = winners.filter((item) => item == "Tie").length;

    console.log("Results:");
    console.log("Player wins:", playerWins);
    console.log("Computer wins:", computerWins);
    console.log("Ties::", ties);

}

function logRound(playerChoice, computerChoice, winner, round) {
    console.log("Round:", round);
    console.log("Player Chose:", playerChoice);
    console.log("Computer Chose:", computerChoice);
    console.log(winner, "Won the Round");
    console.log("..............................");

}





