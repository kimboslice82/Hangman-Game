 var GOThangman = {

    var words = ["khaleesi", "jon snow", "sansa", "the mountain", "tyrion", "drogo"];
    var wins;
    var guessesLeft;
    //var lettersUsed = [];
    var answerString;
    //var guess = prompt("Guess a letter");
    var guesses;
    var pickWord;
        
        
  
    
    function gameStart() {
        wins = 0;
        guessesLeft = 15;
        answerString = []
        guesses = [];
        pickWord = words[Math.floor(Math.random() * words.length)];

    }
    
    /*var el = document.getElementById("game");
    el.innerHTML = pickWord;*/
     
   


   

    // Display empty placeholders for answer    
    for (i = 0; i < pickWord.length; i++) {
        answerString[i] = "_ ";
    }
   
        var el = document.getElementById("placeholders");
        el.innerHTML = answerString;
        el.innerHTML = answerString.join("_ ");

    //Function to display letters used
    function gamePlay() {

    }
    

   // Creating loop for game
    

    
    
    
    /*while (lettersRemaining > 0) {
        //need to show player their guesses
        var el = document.getElementById("game");
            el.innerHTML = answerString.join(" ");
    }*/
        /*if  for (j = o; j < word.length; j++) {
                if (word[j] === guess) {
                    answerString[j] = guess;
                    lettersRemaining--;

                }
            }
        }    */

    
    };
