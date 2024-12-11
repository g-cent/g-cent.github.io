// Function to get the computer's choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
  }
  
  // Function to determine the winner
  function determineWinner(userChoice, computerChoice) {
    //let Ccounter=0;
    //let Ucounter=0;

    if (userChoice === computerChoice) {
      return "It's a tie!";
    }
    //IF USER WINS
    if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "scissors" && computerChoice === "paper")
    ) {
      
      return "You win!";
    } 
      //Computer Wins
      else {
        //Ccounter = Ccounter + 1;

      return "You lose!";
    }
    //document.getElementById("Ucounter").textContent= Ucounter;
    //document.getElementById("Ccounter").textContent = Ccounter;
  }
  
  // Function to play a round
/*  function playRound1(userChoice) {
  
    const computerChoice = getComputerChoice();
    const userChoice = getuserChoice();
    const result = determineWinner(userChoice.toLowerCase(), computerChoice);
  



    console.log(`You chose ${userChoice}, computer chose ${computerChoice}.`);
    
    document.getElementById("userChoice").textContent=userChoice;
    document.getElementById("computerChoice").textContent=computerChoice;
    
    document.getElementById("result").textContent=result;
    
    console.log(result);
  } */
  function playRound(userChoice) {
    
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice.toLowerCase(), computerChoice);
    //const store = counter();

    console.log(`You chose ${userChoice}, computer chose ${computerChoice}.`);

    document.getElementById("userChoice").textContent = userChoice;
    document.getElementById("computerChoice").textContent = computerChoice;
    document.getElementById("result").textContent = result;
    //document.getElementById("counter").textContent = store;

    console.log(result);
    //function(result);
/*
    if(result===computerChoice)
        Ccounter+=1;
    else
        Ucounter+=1;
*/
    //function(result);
   // document.getElementById("Ucounter").textContent= Ucounter;
  //  document.getElementById("Ccounter").textContent = Ccounter;
  } 

  

/* function functionCounter(result){
    let counter = 1;
    let store = 0;
    //grab value for counter from the html page
    let store = document.getElementById("counter").textContent;
    return counter + store;
}
/Users/gio/rps.js
/Users/gio/rps.html

*/
  // Example usage
  playRound("paper"); 
  playRound("rock"); 
  playRound("scissors"); 