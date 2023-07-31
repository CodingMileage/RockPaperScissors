const buttons = document.querySelectorAll('.btn');

let playerScore = 0;
let compScore = 0;

let computerSelection = getComputerChoice();

const player = document.querySelector('.player');
player.textContent = `Player Score: ${playerScore}`;

const computer = document.querySelector('.computer');
computer.textContent = `Computer Score: ${compScore}`;

const output = document.querySelector('.output');
output.textContent = "We need you to win!";


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
            compScore++;
            return 'You lose!\nCPU chose ' + computerSelection;
        } else if (computerSelection === 'scissors') {
            playerScore++;
            return 'You win!\nCPU chose ' + computerSelection;
        }
    }

    if (playerSelection === 'paper'){
        if (computerSelection === 'rock') {
            playerScore++;
            return 'You win!\nCPU chose ' + computerSelection;
        } else if (computerSelection === 'scissors') {
            compScore++;
            return 'You lose!\nCPU chose ' + computerSelection;
        }
    }

    if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            playerScore++;
            return 'You win!\nCPU chose ' + computerSelection;
        } else if (computerSelection === 'rock') {
            compScore++;
            return 'You lose!\nCPU chose ' + computerSelection;
        }
    }
}


const rock = document.querySelector('.rock');
rock.addEventListener('click', () => {
    computerSelection = getComputerChoice();
    playerSelection = 'rock';
    game();
});

const paper = document.querySelector('.paper');
paper.addEventListener('click', () => {
    computerSelection = getComputerChoice();
    playerSelection = 'paper';
    game();
});

const scissors = document.querySelector('.scissors');
scissors.addEventListener('click', () => {
    computerSelection = getComputerChoice();
    playerSelection = 'scissors';
    game();
});

function game() {

    output.textContent = round(playerSelection, computerSelection);
    player.textContent = `Player Score: ${playerScore}`;
    computer.textContent = `Computer Score: ${compScore}`;

    if (playerScore == 5) {
        playerScore = 0;
        compScore = 0;
        output.textContent = 'You win!';
        player.textContent = `Player Score: ${playerScore}`;
        computer.textContent = `Computer Score: ${compScore}`;

    } else if (compScore == 5) {
        playerScore = 0;
        compScore = 0;
        output.textContent = 'You lost!';
        player.textContent = `Player Score: ${playerScore}`;
        computer.textContent = `Computer Score: ${compScore}`;
    }
}