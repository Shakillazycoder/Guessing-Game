// Guessing Game
// Guess a number from 1 to 5
// Generate a random number between 1 to 5
// If the guess number matches random number; then show message won else lost
// Run the game for 5 times
// Show the number of wins and loss

let numberOfWon = 0;
let numberOfLost = 0;

for (let i = 1; i <= 5; i++) {
  const guessNumber = parseInt(prompt("Enter your guess number 1 to 5: "));
  let randomNumber = Math.floor(Math.random() * 5) + 1;
  if (guessNumber === randomNumber) {
    console.log("You have won");
    numberOfWon++;
  } else {
    console.log("You have lost. Random number was :", randomNumber);
    numberOfLost++;
  }
}

document.write("Total Number of won = ", numberOfWon, "<br/>");
document.write("Total Number of lost = ", numberOfLost, "<br/>");
