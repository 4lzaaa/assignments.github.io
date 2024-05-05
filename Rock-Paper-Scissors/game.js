console.log('Welcome to Rock Paper Scissors!');

const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const computerChoice = options[Math.floor(Math.random() * options.length)];
    return computerChoice;
}

function getPlayerChoice() {
    let validatedInput = false;
    while(validatedInput == false) {
        const choice = prompt("rock, paper, or scissors");
        if(choice == null){
            continue

        }
        const choiceInLower = choice.toLowerCase();

        if(options.includes(choiceInLower)) {
            validatedInput = true;
            return choiceInLower;
        }
    }
}

function checkWinner(playerSelection, computerSelection){
    if (playerSelection === computerSelection) {
        return "Tie";
    } else if(
        playerSelection == "rock" && computerSelection == "scissors" ||
        playerSelection == "scissors" && computerSelection == "paper" ||
        playerSelection == "paper" && computerSelection == "rock" ){
            
        return "Player"
    } else {
        return "Computer"
    }
}

function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection,computerSelection) 
    if (result == "Tie") {
        return "It's a tie!"
    } else if(result == "Player") {
        return `You Win! ${playerSelection} beats ${computerSelection}`
    } else {
        return `You Win! ${computerSelection} beats ${playerSelection}`
    }

}

function game() {
    for (let i=0; i< 5; i ++){
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game()
