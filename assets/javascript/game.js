

     //listing out my variables
     var words = ["khaleesi", "jon snow", "sansa", "the mountain", "tyrion", "drogo"];
     var wins = 0;
     var guessesLeft = 9;
     //empty "_" holding the words
     var answerString = [];
     //holds the combinations of correct letters and "_"
     var rightAnswers = [];
     //wrong letter guesses
     var wrongGuesses = [];
     
    
     var numBlanks = 0;
   
     var pickWord = "";


     //First function to start game.  Resets everything.               
     function startGame()  {
   
     guessesLeft = 9;
     wrongGuesses = [];
     pickWord = words[Math.floor(Math.random() * words.length)];
     //Creats the empty spaces for letters
     answerString = pickWord.split("");
     numBlanks = answerString.length;

     console.log(pickWord);

     // CRITICAL LINE - Here we *reset* the guess and success array at each round.
  rightAnswers = [];
  // CRITICAL LINE - Here we *reset* the wrong guesses from the previous round.
  wrongGuesses = [];
  // Fill up the answerField list with appropriate number of blanks.
  // This is based on number of letters in solution.
  for (var i = 0; i < numBlanks; i++) {
    rightAnswers.push("_");
  }

  // Print the initial blanks in console.
  console.log(rightAnswers);


  // Reprints the guessesLeft to 15
  document.getElementById("guesses-left").innerHTML = guessesLeft;

  // Prints the blanks at the beginning of each round in the HTML
  document.getElementById("placeholders").innerHTML = rightAnswers.join(" ");

  // Clears the wrong guesses from the previous round
  document.getElementById("letters-guessed").innerHTML = wrongGuesses.join(" ");
}

// checkLettesr() function
// It's where we will do all of the comparisons for matches.
// Again, it's not being called here. It's just being made for future use.
function checkLetters(letter) {

  // This boolean will be toggled based on whether or not a user letter is found anywhere in the word.
  var letterInWord = false;

  // Check if a letter exists inside the array at all.
  for (var i = 0; i < numBlanks; i++) {
    if (pickWord[i] === letter) {
      // If the letter exists then toggle this boolean to true. This will be used in the next step.
      letterInWord = true;
    }
  }

  // If the letter exists somewhere in the word, then figure out exactly where (which indices).
  if (letterInWord) {

    // Loop through the word.
    for (i = 0; i < numBlanks; i++) {

      // Populate the answerField with every instance of the letter.
      if (pickWord[i] === letter) {
        // Here we set the specific space in blanks and letter equal to the letter when there is a match.
        rightAnswers[i] = letter;
      }
    }
    // Logging for testing.
    console.log(rightAnswers);
  }
  // If the letter doesn't exist at all...
  else {
    // ..then we add the letter to the list of wrong letters, and we subtract one of the guesses.
    wrongGuesses.push(letter); guessesLeft--;
  }
}

// roundComplete() function
// Here we will have all of the code that needs to be run after each guess is made
function roundComplete() {

  

  // Update the HTML to reflect the new number of guesses. Also update the correct guesses.
  document.getElementById("guesses-left").innerHTML = guessesLeft;
  // This will print the array of guesses and blanks onto the page.
  document.getElementById("placeholders").innerHTML = rightAnswers.join(" ");
  // This will print the wrong guesses onto the page.
  document.getElementById("letters-guessed").innerHTML = wrongGuesses.join(" ");

  // If we have gotten all the letters to match the solution...
  /*if (lettersInChosenWord.toString() === answerString.toString()) {
    // ..add to the win counter & give the user an alert.
    winCounter++;
    
    

    // Update the win counter in the HTML & restart the game.
    document.getElementById("wins").innerHTML = wins;
    startGame();
  

  // If we've run out of guesses..
  else if (guessesLeft === 0) {    
    startGame();
  }

}*/

}

// MAIN PROCESS (THIS IS THE CODE THAT CONTROLS WHAT IS ACTUALLY RUN)
// ==================================================================================================

// Starts the Game by running the startGame() function
startGame();

// Then initiate the function for capturing key clicks.
document.onkeyup = function(event) {
  // Converts all key clicks to lowercase letters.
  var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
  // Runs the code to check for correctness.
  checkLetters(letterGuessed);
  // Runs the code after each round is done.
  roundComplete();

};
   