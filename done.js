/* Define a function called rollDice */
function rollDice(){
    // create a variable called roll, set it equal to random 1-6
    let roll = Math.floor(Math.random()*6)+1;
    // if roll equals 6, display "6! You win!"
  if (roll == 6) alert("6! You win!");
    // otherwise use a confirm and say: "You rolled a [roll]"
  else confirm("You rolled a " + roll);
    // close the function block
  }

  // Create a global variable called turns, set it equal to 0
var turns = 0;
/* Define a function called rollDice */
function rollDice(){
  // create a variable called roll, set it equal to random 1-6
  let roll = Math.floor(Math.random()*6+1);
  // add 1 to turns
    (turns + 1);
  // if roll equals 6, display "6! You won in [turns] turns."
if (roll==6) alert("6! You won in " + turns + " turns!");
  // otherwise:

  // use a confirm and say: "You rolled a [roll]"
else {
    confirm ("You rolled a " + roll);
  // then call rollDice again.
  rollDice();
  // close the else block
}
// close the function block
}

/* Simple Guess Program */
function guessGame(){
  // create variable called guess, set to 0
  var guess = 0;
  // create variable called answer and store a random integer 1-100
  var answer = Math.floor(Math.random()*100)+1;
  // display the answer for testing purposes only
  alert(answer);
  // set guess equal to prompt asking user to "Guess a number, 1-100"
  guess = prompt("Guess a number, 1-100");
  // if guess equals answer display "Correct!" 
  if (guess==answer) alert("correct!");
  // or if guess is greater than answer display "Too high!" 
  else if(guess>answer) alert("Too high!");
  // or display "Too low!" 
  else alert("Too low!");
  }

  /* Simple Guess Program */

// create global variable guess, set to 0
var guess = 0;
// create a global variable called answer and store a random integer 1-100
var answer = Math.floor(Math.random()*100)+1;
// define function guessGame
function guessGame(){
// display the answer for testing purposes only
alert(answer);
// set guess equal to prompt asking user to "Guess a number, 1-100"
guess = prompt("Guess a number, 1-100");
// if guess equals answer display "Correct!" 
if (guess==answer) alert("Correct!")
// or if guess is greater than answer create a code block
else if (guess>answer) {
// display "Too high!" 
alert("Too high!");
// call guessGame
guessGame();
// close the else code block
}
// otherwise open a code block
else {
// display "Too low!" 
alert("Too low!")
// call guessGame
guessGame();
// close the else code block
}
// end the function
}

/* Simple Guess Program */

// define function guessGame
function guessGame(){
  // generate a random integer 1-100
var answer = Math.floor(Math.random()*100)+1;
  // display the integer for testing purposes only
alert(answer);
  // create guess and set equal to 0 
var guess = 0;
  // loop while guess is not equal to answer
  while (guess!=answer) {
    // set guess equal to asking user to "Guess a number, 1-100"
    guess = prompt("Guess a number, 1-100");
    // if guess equals answer display "Correct!" 
    if (guess==answer) alert("Correct!");
    // or if guess is greater than answer display "Too high!" 
    else if (guess>answer) alert("Too high!");
    // or if guess is less than answer display "Too low!" 
    else if (guess<answer) alert("Too low!");
    // else say "Bad input"
    else alert("Bad input");
  // end the loop
  }
// end the function
}

/* Simple Guess Program */

// define function guessGame
function guessGame(){
  // generate a random integer 1-100
var answer = Math.floor(Math.random()*100)+1;
  // display the integer for testing purposes only
alert(answer);
  // create guess and set equal to 0 
var guess = 0;
  // loop while guess is not equal to answer or to "q"
  //  while ((guess!=answer)&&guess!="q") {
  while (!(guess==answer||guess=="q")) {
    // set guess equal to asking user to "Guess a number, 1-100"
    guess = prompt("Guess a number, 1-100");
    // if guess equals "q" display "Quitter!"
    if (guess=="q") alert("Quitter!");
    // if guess equals answer display "Correct!" 
    else if (guess==answer) alert("Correct!");
    // or if guess is greater than answer display "Too high!" 
    else if (guess>answer) alert("Too high!");
    // or if guess is less than answer display "Too low!" 
    else if (guess<answer) alert("Too low!");
    // else say "Bad input"
    else alert("Bad input");
  // end the loop
  }
// end the function
}

/* Guess Game Program by Dante
 * Adds the ability to play again. 
 */

/* newGame is an outer loop giving the user an option 
 * to play again, using a boolean variable called again.
 */

// define function newGame
function newGame() {
  // create a Boolean variable for again, set to true
let again = true;
  // loop as long as again is true 
  while (again==true) {
    // run the guessGame function 
    guessGame();
    // ask to play again with again set to a confirm
    again = confirm("Play again?");
    // close the loop
  }
  // thank the player for playing
alert("Thank you for playing!");
  // close the function
}

  
// create a function called guessGame 
function guessGame() {
  // create guess and set equal to 0 
let guess = 0;
  // create tries and set equal to 0 
let tries = 0;
  // create variable answer and generate a random integer 1-100
let answer = Math.floor(Math.random()*100)+1;
  // display the integer for testing purposes only
alert(answer);
  // loop while guess is not equal to answer
  while (guess!=answer) {
    // set guess equal to asking user to "Guess a number, 1-100"
  guess = prompt("Guess a number, 1-100");
    // add one to tries
  tries = tries + 1;
    // if guess equals answer display "Correct in [tries] tries!" 
 if (guess==answer) alert("Correct in " + tries + " tries!");
    // or if guess is greater than answer display "Too high!" 
  else if (guess>answer) alert("Too high!");
    // or if guess is less than answer display "Too low!" 
  else if (guess<answer) alert("Too low!");
    // if it's none of those, say "Bad Input!"
  else alert("Bad input!");
    // end the loop
}
  // end the function
}

/* Guess Game Program */

// define function newGame
function newGame() {
  // create a Boolean variable for again, set to true
let again = true;
  // run the guessGame function
guessGame();
  // loop as long as again is true 
  while(again==true) {
    // ask to play again with again set to a confirm
  again = confirm("Play again?");
    // if again is true run the guessGame function
  if (again==true) guessGame();
    // close the loop
  }
  // thank the player for playing
alert("Thank you for playing.");
  // close the function
}

// create a function called guessGame
function guessGame(){
  // create guess and set equal to 0 
var guess = 0
  // create tries and set equal to 0 
var tries = 0
  // create variable answer and generate a random integer 1-100
var answer = Math.floor(Math.random()*100)+1;
  // display the integer for testing purposes only
alert(answer);
  // loop while guess is not equal to answer
  while (guess!=answer) {
    // set guess equal to asking user to "Guess a number, 1-100"
  guess = prompt("Guess a number, 1-100");
    // add one to tries
  tries = tries + 1
    // if guess equals answer display "Correct in [tries] tries!" 
  if (guess==answer) alert("Correct in " + tries + " tries!");
    // or if guess is "q" break the loop
  else if (guess=="q") break;
    // or if guess is greater than answer display "Too high!" 
  else if (guess>answer) alert("Too high!");
    // or if guess is less than answer display "Too low!" 
  else if (guess<answer) alert("Too low!");
    // if it's none of those, say "Bad Input!"
  else alert("Bad input!");
    // end the loop
  }
  // end the function
}

var guesses = 5;
var guess = 0;
var answer = Math.floor(Math.random()*100)+1;
function guessGame(){
alert("You have " + guesses + " tries");
while (guess!=answer&&guesses!=0) {
  guesses = guesses -1;
  guess = prompt("Guess a number, 1-100");
  if (guess==answer) alert("You got it!");
  else if (guess>answer) alert("Too high!");
  else alert("too low!");
  alert("You have " + guesses + " tries left");
}
if (guess==answer) alert("You win!");
if (guesses==0) alert("You lose! The answer was " + answer);
}