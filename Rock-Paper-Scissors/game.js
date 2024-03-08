console.log("Welcome to Rock, Paper, scissors!");
console.log("to begin playing, type y/n");


function getComputerChoice() {
    let compChoice = Math.floor(Math.random() * 3) + 1;
    console.log("The computer chose: ");

    if (compChoice == 1) {
        console.log("Rock!")
    } else if (compChoice == 2 ) {
        console.log("Paper!") 
    } else {
        console.log("Scissor!")
    }

}


function getUserChoice() {
    let userChoice = prompt("What will you pick?, Rock, paper or scissors?");

    console.log("you chose: ");  

    let firstLetter = userChoice.charAt(0).toUpperCase()
    if (firstLetter === "R") {
        console.log("Rock!")
    } else if (firstLetter === "P" ) {
        console.log("Paper!") 
    } else if (firstLetter === "S"){
        console.log("Scissor!")
    }
}

// getUserChoice()

function winner() {
    let compChoice = getComputerChoice;
    let userChoice = getUserChoice;
    if (userChoice === "P" && compChoice === "S" 
        || userChoice === "R" && compChoice === "P" 
        || compChoice === "R" && userChoice === "S")  {
        console.log("Computer wins!, You lose")
    } else if (compChoice === "P" && userChoice === "S" 
        || compChoice === "R" && userChoice === "P" 
        || userChoice === "R" && compChoice === "S") {
        console.log("You win!")
    } else {
        console.log("its a draw!")
    }
}


function game() {
    setTimeout(() => {
        let gameStart = prompt("Do you want to play?");
        if (gameStart == "y") {
            getUserChoice();
            getComputerChoice();
            winner();
            console.log("If you want to play again type y/n");
            setTimeout(() => {
                again = prompt("Do you want to play again(y/n)");
                if (again.toLowerCase() === "y") {
                    game()
                } else {
                    console.log("You do not want to play")
                }
            }, 4000);
        } else {
            console.log("You do not want to play")
        }
    }, 3000);
}

game()
