

     //listing out my variables
     var words = ["khaleesi", "jon snow", "sansa", "the mountain", "tyrion", "drogo"];
     var wins = 0;
     var guessesLeft = 15;
     var answerString = []
     var guesses = "";
     var wrongGuesses = [];
     var chosenWord = "";
     
          
     function startGame() {
  

     var wins = 0;
     var guessesLeft = 15;
     var wrongGuesses = [];
     var pickWord = words[Math.floor(Math.random() * words.length)];

     answerString = pickWord.split("");
    

    /*for (i = 0; i < pickWord.length; i++) {
        answerString[i] = "_ "; console.log(answerString)
    }

       var el = document.getElementById("placeholders");
        el.innerHTML = answerString;
        el.innerHTML = answerString.join("_ ");*/

    
    document.getElementById("guessesleft").innerHTML = wrongGuesses.join(" ");

    
}

function checkLetters() {

}

function reset() {

}
    
    document.keyup = function(event) {
     

        
    
        
};
    

    
    
    
    
        

    
    
