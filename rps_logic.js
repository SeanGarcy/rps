let choicesArray = ["Rock","Paper","Scissors"];

function getComputerChoice() {
    return choicesArray[(Math.floor(Math.random() * choicesArray.length))];
}

function playRound(playerSelection, computerSelection){
    switch(playerSelection) {
        case "Rock":
            if(computerSelection === "Paper"){
                return "Player Selection: " + playerSelection + "," + " Computer Selection: "+ computerSelection + " Outcome: " + "Lose";
            }
            else if (computerSelection === "Scissors"){
                return "Player Selection: " + playerSelection + "," + " Computer Selection: "+ computerSelection + " Outcome: " + "Win";
            }
            else{
                return "Player Selection: " + playerSelection + "," + " Computer Selection: "+ computerSelection + " Outcome: " + "Tie";
            }
        case "Paper":
            if(computerSelection === "Scissors"){
                return "Player Selection: " + playerSelection + "," + " Computer Selection: "+ computerSelection + " Outcome: " + "Lose";
            }
            else if (computerSelection === "Rock"){
                return "Player Selection: " + playerSelection + "," + " Computer Selection: "+ computerSelection + " Outcome: " + "Win";
            }
            else{
                return "Player Selection: " + playerSelection + "," + " Computer Selection: "+ computerSelection + " Outcome: " + "Tie";
            }
        case "Scissors":
            if(computerSelection === "Rock"){
                return "Player Selection: " + playerSelection + "," + " Computer Selection: "+ computerSelection + " Outcome: " + "Lose";
            }
            else if (computerSelection === "Paper"){
                return "Player Selection: " + playerSelection + "," + " Computer Selection: "+ computerSelection + " Outcome: " + "Win";
            }
            else{
                return "Player Selection: " + playerSelection + "," + " Computer Selection: "+ computerSelection + " Outcome: " + "Tie";
            }
    } 
}

const playerSelection = prompt("Rock, Paper or Scissors?");
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));