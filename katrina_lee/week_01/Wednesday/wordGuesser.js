var word = ["B", "A", "R", "N"];
var currentGuess = ["_","_","_","_"];
var allLetters = [];
var rewardAmt = 0;
var hangman = 0;

var guessLetter = function(guess){
  if(hangman >= 5){
    console.log("You lost :( Sadly, the fat lady's sung and the man has hung!");
  }else{
  if(word.indexOf(guess) !== -1){ //need to add forloop
    for (var i = 0; i < word.length; i++) {
      if(word[i] === guess){
        currentGuess[i] = guess;
      }
    }
    if(word.toString() === currentGuess.toString()){
      allLetters.push(guess);
      console.log(allLetters);
      rewardAmt = Math.round(rewardAmt+ (Math.random() * 100));
      console.log(currentGuess);
      console.log("Congratulations you won and you get $" + rewardAmt + "!");
      hangman = hangman - 1;
    } else{
      allLetters.push(guess);
      console.log(allLetters);
      console.log(currentGuess);
      console.log("Congratulations on getting letter " + guess);
      rewardAmt = rewardAmt+ (Math.random() * 100);
      hangman = hangman - 1;
    }
    } else {
      allLetters.push(guess);
      hangman = hangman + 1;
      console.log(allLetters);
      console.log(currentGuess);
      console.log("Try again");
      rewardAmt = rewardAmt- (Math.random() * 100);
    }
  }
}

//how do i cover multiple letters in a word with the indexOf approach?//
