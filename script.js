function getComputerChoice() {
    let choice;
    let random = Math.floor(Math.random() * 3) + 1;
    console.log(random);
    if (random == 1) {
        choice = 'rock';
    } else if (random == 2) {
        choice = 'paper';
    } else {
        choice = 'scissors';
    }
    console.log(choice);
}
