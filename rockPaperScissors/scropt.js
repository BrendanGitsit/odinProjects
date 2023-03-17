
//Function to generate random RPS choice for Computer
function getComputerChoice(){
    let choiceNum = Math.floor(Math.random()*3);
    const choiceRPS = ["rock", "paper", "scissors"];
    return choiceRPS[choiceNum];
}

//Function to collect and validate user input for rock paper scissors
function RPSInput(){
    let j = 0;
    let playerSelection = prompt("Rock, Paper, or Scissors?");
    playerSelection = playerSelection.toLowerCase();
    while (j<1){
        if (playerSelection == 'rock' || playerSelection == 'paper' || playerSelection == 'scissors'){
            j = 1;
        } else{
            playerSelection = prompt("Invalid Selection, please select 'Rock', 'Paper', or 'Scissors'");
            playerSelection = playerSelection.toLowerCase();
        }
    }
    return playerSelection;
}

//Function to play one round of RPS
function playRound(playerSelection, computerSelection){
    let result = " ";
    let score = 2;
    if(playerSelection === computerSelection){
        result = "Tie Game Try Again";
    } else if ((playerSelection === "rock" && computerSelection === "paper")
            || (playerSelection === "paper" && computerSelection === "scissors")
            || (playerSelection === "scissors" && computerSelection === "rock")){
        result = "You Lose - Computer Wins";
        score = 1;
    } else{
        result = "You Win!!";
        score = 0;
    }
    console.log(result);
    return score;
}

//Function to play 5 rounds of RPS
function game(){
    let score = [0 , 0, 0];
    let output = 3;
    let outcome = " ";
    for (let i = 0; i < 5; i++){
        let compInput = getComputerChoice();
        let humanInput = RPSInput();
        output = playRound(humanInput,compInput);
        score[output] = score[output] +1;
    }
    if (score[0]> score[1]){
        outcome = `Contratulations! You win! Your Score is ${score[0]} Wins, ${score[1]} Losses, ${score[2]} Ties`;
    }  else if (score[0]<score[1]){
        outcome = `You Lose! Your Score is ${score[0]} Wins, ${score[1]} Losses, ${score[2]} Ties`;
    } else{
        outcome = `Tie Game! Your Score is ${score[0]} Wins, ${score[1]} Losses, ${score[2]} Ties`;
    }
    return outcome;
}  


console.log(game());


