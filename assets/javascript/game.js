

     var words = ["khaleesi", "jon snow", "sansa", "the mountain", "tyrion", "drogo"];
     var wins = 0;
     var guessesLeft = 15;
     var answerString = []
     var guesses = [];
    
     var pickWord = words[Math.floor(Math.random() * words.length)]; 
          
     
    // Display empty placeholders for answer    

    for (i = 0; i < pickWord.length; i++) {
        answerString[i] = "_ ";
    }

        var el = document.getElementById("placeholders");
        el.innerHTML = answerString;
        el.innerHTML = answerString.join("_ ");


    

    

    
    
    
    
        

    
    
