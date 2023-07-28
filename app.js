function getComputerChoice() {
    const cpu = ['Rock', 'Paper', 'Scissors']

    const random = Math.floor(Math.random() * cpu.length);
    console.log(random, cpu[random]);
}

console.log(getComputerChoice())