function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

function playRound(playerSelection, computerSelection){

    if(playerSelection.toLowerCase() === "rock"){
        if(computerSelection.toLowerCase() === "paper"){
            return "You Lose! Paper beats Rock";
        }else if(computerSelection.toLowerCase() === "scissors"){
            return "You Win! Rock beats Scissors";
        }else{
            return "It's a draw! Try once again!";
        }
    }else if(playerSelection.toLowerCase() === "paper"){
        if(computerSelection.toLowerCase() === "rock"){
            return "You Win! Paper beats Rock";
        }else if(computerSelection.toLowerCase() === "scissors"){
            return "You Lose! Scissors beats Paper";
        }else{
            return "It's a draw! Try once again!";
        }
    }else if(playerSelection.toLowerCase() === "scissors"){
        if(computerSelection.toLowerCase() === "rock"){
            return "You Lose! Rock beats Scissors";
        }else if(computerSelection.toLowerCase() === "paper"){
            return "You Win! Scissors beats Paper";
        }else{
            return "It's a draw! Try once again!";
        }
    }else{
        console.log("Wrong Input");
    }
}


function start(){
    const playerSelection = prompt("Enter your choice (Rock, Paper, or Scissors)");
    const computerSelection = getComputerChoice();
    const res = playRound(playerSelection, computerSelection);
    // alert(playRound(playerSelection, computerSelection));
    console.log(playRound(playerSelection, computerSelection));
    if(res.includes("Win")){
        return 1;
    }else if(res.includes("Lose")){
        return -1;
    }else return 0;

}

function playGame(){
    let playerScore = 0;
    let computerScore = 0;

    for(let i = 0; i < 5; i++){
        let score = start();
        playerScore += score;
        computerScore -= score;
        console.log(playerScore);
        console.log(computerScore);
    }

    if(playerScore > computerScore){
        alert("You Won!!!")
    }else{
        alert("You Lost! Better Luck next time")
    }
}
