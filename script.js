function getComputerChoice(){
    let choice = [ "rock", "paper", "scissors"];
    let answer = choice[ Math.floor(Math.random() * choice.length)];
return answer
}

let computerPoint = 0;
let playerPoint = 0;

function playRound(playerSelection, computerSelection){
    if ((playerSelection === "rock") && (computerSelection === "scissors")) {
        let result = document.createElement("p");
        result.textContent ="You won Rock beats Scissors"
        let div = document.querySelector(".results");
        div.textContent = ""
        div.appendChild(result)
        let playerP = document.createElement("div");
        playerPoint += 1
        playerP.textContent = `player = ${playerPoint}`
        div.appendChild(playerP)
        let computerP = document.createElement("div");
        computerP.textContent = `computer= ${computerPoint}`
        div.appendChild(computerP);
        if(playerPoint === 5){
            div.textContent = "Victory!"
            computerPoint = 0
            playerPoint = 0
        }
    }
    else if ((playerSelection === "rock") && (computerSelection === "paper" )) {
        let result = document.createElement("p");
        result.textContent ="You lost Paper beats Rock"
        let div = document.querySelector(".results");
        div.textContent = ""
        div.appendChild(result)
        let playerP = document.createElement("div");
        computerPoint += 1
        playerP.textContent = `player = ${playerPoint}`
        div.appendChild(playerP)
        let computerP =  document.createElement("div");
        computerP.textContent = `computer= ${computerPoint}`
        div.appendChild(computerP);
        if (computerPoint === 5){
            div.textContent = "Defeat!"
            computerPoint = 0
            playerPoint = 0
        
        }
    }
    else if ((playerSelection === "paper") && (computerSelection === "scissors")) {
        let result = document.createElement("p");
        result.textContent ="You lost Scissors beats Paper"
        let div = document.querySelector(".results");
        div.textContent = ""
        div.appendChild(result)
        let playerP = document.createElement("div");
        computerPoint += 1
        playerP.textContent = `player = ${playerPoint}`
        div.appendChild(playerP)
        let computerP = document.createElement("div");
        computerP.textContent = `computer= ${computerPoint}`
        div.appendChild(computerP);
        if (computerPoint === 5){
            div.textContent = "Defeat!"
            computerPoint = 0
            playerPoint = 0
        
        }
    }
    else if((playerSelection === "paper") && (computerSelection === "rock")) {
        let result = document.createElement("p");
        result.textContent ="You won Paper beats Rock"
        let div = document.querySelector(".results");
        div.textContent = ""
        div.appendChild(result)
        let playerP = document.createElement("div");
        playerPoint += 1
        playerP.textContent = `player = ${playerPoint}`
        div.appendChild(playerP)
        let computerP = document.createElement("div")
        computerP.textContent = `computer= ${computerPoint}`
        div.appendChild(computerP);
        if(playerPoint === 5){
            div.textContent = "Victory!"
            computerPoint = 0
            playerPoint = 0
        }
        
    }
    else if((playerSelection === "scissors") && (computerSelection === "rock")) {
        let result = document.createElement("p");
        result.textContent ="You lost Rock beats Scissors"
        let div = document.querySelector(".results");
        div.textContent = ""
        div.appendChild(result)
        let playerP = document.createElement("div");
        computerPoint += 1
        playerP.textContent = `player = ${playerPoint}`
        div.appendChild(playerP)
        let computerP = document.createElement("div");
        computerP.textContent = `computer= ${computerPoint}`
        div.appendChild(computerP)
        if (computerPoint === 5){
            div.textContent = "Defeat!"
            computerPoint = 0
            playerPoint = 0
        
        }
    }
    else if((playerSelection === "scissors") && (computerSelection === "paper")) {
        let result = document.createElement("p");
        result.textContent ="You won Scissors beats Paper"
        let div = document.querySelector(".results");
        div.textContent = ""
        div.appendChild(result)
        let playerP = document.createElement("div");
        playerPoint += 1
        playerP.textContent = `player = ${playerPoint}`
        div.appendChild(playerP)
        let computerP = document.createElement("div");
        computerP.textContent = `computer= ${computerPoint}`
        div.appendChild(computerP);
        if(playerPoint === 5){
            div.textContent = "Victory!"
            computerPoint = 0
            playerPoint = 0
        }
    }
    else {
        let result = document.createElement("p");
        result.textContent =" It's a tie"
        let div = document.querySelector(".results");
        div.textContent = ""
        div.appendChild(result)
        let playerP = document.createElement("div");
        playerP.textContent = `player = ${playerPoint}`
        div.appendChild(playerP)
        let computerP = document.createElement("div");
        computerP.textContent = `computer= ${computerPoint}`
        div.appendChild(computerP)
    };
}


const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
rockButton.addEventListener("click", function () {
    playRound("rock", getComputerChoice())
});
paperButton.addEventListener("click", function() {
    playRound("paper", getComputerChoice())
});
scissorsButton.addEventListener("click", function() {
    playRound("scissors", getComputerChoice())
});