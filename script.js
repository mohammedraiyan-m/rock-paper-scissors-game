//computer random genarate value
let randomValue;

function getComputerChoice() {
   
    const randomNumber = Math.floor(Math.random() * 3);
   if (randomNumber === 0){  
       randomValue = "rock";      
    
   }else if (randomNumber === 1) {
       randomValue = "paper"; 
      
   }else   {
       randomValue = "scissors"; 
   }
}

//Human input value
let input; 
function getHumanChoice() {
    input = prompt("You choice any one Rock, Paper or Scissors");;
}

//This funtion player score update
let humanScore =0;
let computerScore = 0;
let human;
let computer;

function playRound() {
         console.log(input);
         console.log(randomValue);
         
         if (input ===  randomValue ) {
            console.log("traw");
            
            getHumanChoice()
            getComputerChoice()
            console.log(input);
            console.log(randomValue);

         }
         else if (input === "rock" && randomValue === "paper" ) {
            console.log("you lose");
            computerScore++;
            
         }else if (input === "rock" && randomValue === "scissors") {
            console.log("You win");
            humanScore++;

         }else if (input === "paper" && randomValue === "rock") {
            console.log("you win");
            humanScore++;

         }else if (input === "paper" && randomValue === "scissors") {
            console.log("you lose");
            computerScore++;
            
         }else if (input === "scissors" && randomValue === "rock") {
            console.log("you lose");
            computerScore++;
           
         }else if (input === "scissors" && randomValue === "paper") {
            console.log("you win");
            humanScore++;
         }
         computer =+computerScore;
         human =+humanScore;
             
             console.log(human);   
             console.log(computer);  
}

//loop runing times
function playGame() {
  for (let i = 0; i < 5; i++) {
   const humanSeleciton = getHumanChoice();
  const computerSelection = getComputerChoice();
   playRound(humanSeleciton, computerSelection) ;
   
  }
}
playGame()
