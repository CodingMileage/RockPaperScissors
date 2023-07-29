function getComputerChoice() {
    const cpu = ['rock', 'paper', 'scissors']

    const random = Math.floor(Math.random() * cpu.length);

    return cpu[random];
}

function round(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'Its a tie!\nYou both chose '+ playerSelection;
    }

    if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            return 'You lose!\nCPU chose ' + computerSelection;
        } else if (computerSelection === 'scissors') {
            return 'You win!\nCPU chose ' + computerSelection;
        }
    }

    if (playerSelection === 'paper'){
        if (computerSelection === 'rock') {
            return 'You win!\nCPU chose ' + computerSelection;
        } else if (computerSelection === 'scissors') {
            return 'You lose!\nCPU chose ' + computerSelection;
        }
    }

    if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            return 'You win!\nCPU chose ' + computerSelection;
        } else if (computerSelection === 'rock') {
            return 'You lose!\nCPU chose ' + computerSelection;
        }
    }
}


function game() {
    for (i = 0; i < 5; i++) {
        computerSelection = getComputerChoice();
        console.log(round(playerSelection, computerSelection))
    }
}


let user = prompt("Rock, Paper or Scissors: ");
let playerSelection = user.toLowerCase();
let computerSelection = getComputerChoice();
game();