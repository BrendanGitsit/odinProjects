
//Function to generate random RPS choice for Computer
function getComputerChoice(){
    let choiceNum = Math.floor(Math.random()*3);
    const choiceRPS = ["rock", "paper", "scissors"];
    return choiceRPS[choiceNum];
}

//Function to collect and validate user input for rock paper scissors - (NOT USED IN UI/UX VERSION SINCE INPUT IS NOT FREE TEEXT)
/*
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
*/

//Function to play one round of RPS
function playRound(playerSelection, computerSelection){
    let result = " ";
    let win = document.getElementById("win").innerHTML;
    let lose = document.getElementById("lose").innerHTML;
    let tie = document.getElementById("tie").innerHTML;

    if(playerSelection === computerSelection){
        result = `You picked ${playerSelection}, </br> Computer picked ${computerSelection}, </br> Tie Game This Round`
        document.getElementById("tie").innerHTML = `${Number(tie)+1}`;
    } else if ((playerSelection === "rock" && computerSelection === "paper")
            || (playerSelection === "paper" && computerSelection === "scissors")
            || (playerSelection === "scissors" && computerSelection === "rock")){
                result = `You picked ${playerSelection}, </br> Computer picked ${computerSelection}, </br> You lose this round`
        document.getElementById("lose").innerHTML = `${Number(lose)+1}`;
    } else{
        result = `You picked ${playerSelection}, </br> Computer picked ${computerSelection}, </br> You win this round!!`
        document.getElementById("win").innerHTML = `${Number(win)+1}`;
    }
    document.getElementById("roundOutcome").innerHTML = `${result}`;
   // return score;
}

//Function to play 5 rounds of RPS
/*
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
*/

