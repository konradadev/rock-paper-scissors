//Rock Paper Scissors script

function getComputerMove(){
    let min=Math.ceil(1);
    let max=Math.floor(4);
    return Math.floor(Math.random()*(max-min)+min);
}

function computerPlay(){
    switch (getComputerMove()){
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

function getPlayerMove(e){
    return e.target.getAttribute("data-move");
}

function getGameResult(e){
    const computerSelection = computerPlay();
    const playerSelection = getPlayerMove(e);

    let roundWinner;
    switch(computerSelection){
        case "rock":
            switch(playerSelection){
                case "rock":
                    roundWinner = "tie";
                    break;
                case "paper":
                    roundWinner = "player";
                    break;
                case "scissors":
                    roundWinner = "computer";
                    break;
            }
            break;
        case "paper":
            switch(playerSelection){
                case "rock":
                    roundWinner = "computer";
                    break;
                case "paper":
                    roundWinner = "tie";
                    break;
                case "scissors":
                    roundWinner = "playerScissors";//ensures grammaticaly correct result
                    break;
            }
            break;
        case "scissors":
            switch(playerSelection){
                case "rock":
                    roundWinner = "player";
                    break;
                case "paper":
                    roundWinner = "computerScissors";//ensures grammaticaly correct result
                    break;
                case "scissors":
                    roundWinner = "tieScissors";//ensures grammaticaly correct result
                    break;
            }
            break;
    }

    let roundResult;
    switch(roundWinner){
        case "player":
            roundResult=`You Win: ${playerSelection} beats ${computerSelection}`;
            break;
        case "playerScissors":
            roundResult=`You Win: ${playerSelection} beat ${computerSelection}`;//ensures grammaticaly correct result
            break;
        case "computer":
            roundResult=`You Lose: ${computerSelection} beats ${playerSelection}`;
            break;
        case "computerScissors":
            roundResult=`You Lose: ${computerSelection} beat ${playerSelection}`;//ensures grammaticaly correct result
            break;
        case "tie":
            roundResult=`It's a Tie: ${playerSelection} is equal to ${computerSelection}`;
            break;
        case "tieScissors":
            roundResult=`It's a Tie: ${playerSelection} are equal to ${computerSelection}`;//ensures grammaticaly correct result
            break;
    }

    return roundResult;
}

function showGameResult(e){
    const container = document.querySelector(".container");

    const resultContainer = document.createElement("div");
    resultContainer.setAttribute("class", "resultcontainer");

    const result = document.createElement("p");
    result.setAttribute("class", "result");

    const lastContainerChild = container.lastElementChild;
    const lastContainerChildClass = lastContainerChild.getAttribute("class");
    if(lastContainerChildClass === "resultcontainer"){
        document.querySelector(".result").textContent = getGameResult(e);
    }else{
        result.textContent = getGameResult(e);
        resultContainer.appendChild(result);
        container.appendChild(resultContainer);
    }

    gamesPlayed++;
    const gamesCounter = document.querySelector(".gamesplayed");
    gamesCounter.textContent = `Games played: ${gamesPlayed}`;
}

let gamesPlayed=0;
const buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener("click", showGameResult));