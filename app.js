function getComputerChoice() {
    const cpu = ['rock', 'paper', 'scissors']

    const random = Math.floor(Math.random() * cpu.length);
    console.log(random, cpu[random]);

    return cpu[random];
}

// console.log(getComputerChoice())

function round(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'Its a tie!';
    }

    if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            return 'You lose!';
        } else if (computerSelection === 'scissors') {
            return 'You win!';
        }
    }

    if (playerSelection === 'paper'){
        if (computerSelection === 'rock') {
            return 'You win!';
        } else if (computerSelection === 'scissors') {
            return 'You lose!';
        }
    }

    if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            return 'You win!';
        } else if (computerSelection === 'rock') {
            return 'You lose!';
        }
    }
}


function game() {
    for (i = 0; i < 5; i++) {
        computerSelection = getComputerChoice();
        console.log(round(playerSelection, computerSelection))
    }
}


let playerSelection = "rock";
let computerSelection = getComputerChoice();
game();