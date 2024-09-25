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