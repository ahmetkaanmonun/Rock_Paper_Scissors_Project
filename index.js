options = ["rock","paper","scissors"]
let playerScore=0;
let computerScore=0;



function computerPlay(options){

    let computerChoice = options[Math.floor(Math.random()*options.length)];

    return computerChoice;


}

function playRound(playerSelection,computerSelection){


    if(playerSelection === "rock" && computerSelection === "paper"){

        console.log("You Lose! Paper beats Rock")
        computerScore++;
        

    }
    else if(playerSelection === "paper" && computerSelection === "Scissors"){

        console.log("You Lose! Paper beats Rock")
        computerScore++;
       
    }
    else if(playerSelection === "scissors" && computerSelection === "rock"){

        console.log("You Lose! Paper beats Rock")
        computerScore++;
        
    }
    else if(playerSelection === "rock" && computerSelection === "scissors"){

        console.log("You Win! Rock beats Scissors")
        playerScore++;
        
    }
    else if(playerSelection === "paper" && computerSelection === "rock"){

        console.log("You Win! Paper beats Rock")
        playerScore++;
       
    }
    if(playerSelection === "scissors" && computerSelection === "paper"){

        console.log("You Win! Scissors beat Paper")
        playerScore++;
        

    }
    else if(playerSelection === computerSelection){

        console.log("Draw")


    }


    
}


function game(){

    


    for(let i= 0;i<5;i++){

        let playerSelection ="Rock"
        let computerSelection = computerPlay(options)
        playRound(playerSelection.toLowerCase(),computerSelection);
          

    }
    if(playerScore>computerScore){

        console.log("The winner is player!")
        console.log("User score:" + playerScore)
        console.log("Computer score:" + computerScore)
    }
    else if(computerScore>playerScore){

        console.log("The winner is computer!")
        console.log("User score:" + playerScore)
        console.log("Computer score:" + computerScore)
    }
    else if(playerScore === computerScore){

        console.log("The winner is anyone!")
        console.log("User score:" + playerScore)
        console.log("Computer score:" + computerScore)
    }

    
}


game();
