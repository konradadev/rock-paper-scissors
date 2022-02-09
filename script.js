//Rock Paper Scissors script

function getComputerMove(){
    let min=Math.ceil(1);
    let max=Math.floor(4);//equivalent to 1 <= x < 4
    return Math.floor(Math.random()*(max-min)+min);
}

function computerPlay(){
    switch (getComputerMove()){
        case 1:
            computerSelectionInt=1;
            return "Rock";
        case 2:
            computerSelectionInt=1;
            return "Paper";
        case 3:
            computerSelectionInt=1;
            return "Scissors";
    }
}

function playRound(playerSelection,computerSelection){
    playerSelection=playerSelection.toLowerCase();
    playerSelection=playerSelection[0].toUpperCase()+playerSelection.slice(1);

    let roundWinner;
    switch(computerSelection){
        case "Rock":
            switch(playerSelection){
                case "Rock":
                    roundWinner = "tie";
                    break;
                case "Paper":
                    roundWinner = "player";
                    break;
                case "Scissors":
                    roundWinner = "computer";
                    break;
            }
            break;
        case "Paper":
            switch(playerSelection){
                case "Rock":
                    roundWinner = "computer";
                    break;
                case "Paper":
                    roundWinner = "tie";
                    break;
                case "Scissors":
                    roundWinner = "playerScissors";//ensures grammaticaly correct result
                    break;
            }
            break;
        case "Scissors":
            switch(playerSelection){
                case "Rock":
                    roundWinner = "player";
                    break;
                case "Paper":
                    roundWinner = "computerScissors";//ensures grammaticaly correct result
                    break;
                case "Scissors":
                    roundWinner = "tieScissors";//ensures grammaticaly correct result
                    break;
            }
            break;
    }

    let roundResult;
    switch(roundWinner){
        case "player":
            roundResult=`You Win! ${playerSelection} beats ${computerSelection}`;
            break;
        case "playerScissors":
            roundResult=`You Win! ${playerSelection} beat ${computerSelection}`;//ensures grammaticaly correct result
            break;
        case "computer":
            roundResult=`You Lose! ${computerSelection} beats ${playerSelection}`;
            break;
        case "computerScissors":
            roundResult=`You Lose! ${computerSelection} beat ${playerSelection}`;//ensures grammaticaly correct result
            break;
        case "tie":
            roundResult=`It's a Tie! ${playerSelection} is equal to ${computerSelection}`;
            break;
        case "tieScissors":
            roundResult=`It's a Tie! ${playerSelection} are equal to ${computerSelection}`;//ensures grammaticaly correct result
            break;
    }

    return roundResult;
}

function checkPlayerSelection(playerSelection){
    playerSelection=playerSelection.toLowerCase();
    if (playerSelection==="rock" || playerSelection==="paper" || playerSelection==="scissors"){
        return 1;
    }else{
        return 0;
    }
}

function game(){
    for(let i=0;i<5;i++){
        let playerSelection=prompt("Choose your move");
        //input error prevention
        let checkInput=checkPlayerSelection(playerSelection);
        while (checkInput!=1){
            playerSelection=prompt("Wrong move! Type in rock, paper or scissors");
            checkInput=checkPlayerSelection(playerSelection);
        }

        let computerSelection=computerPlay();
        console.log(playRound(playerSelection,computerSelection));
    }
}

game();