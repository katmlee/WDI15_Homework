var greaterNum = function(num1, num2){
  if (num1 > num2){
    return num1;
  } else {
    return num2;
    }
}

var result = greaterNum(5, 10);
console.log(result);

var maxOfThree = function (num1, num2, num3){
  if(num1 > num2 && num1 > num3){
    return num1;
  } else if(num2 > num1 && num2 > num3){
    return num2;
  } else{
    return num3;
  }
}

var result = maxOfThree(5, 10, 18);
console.log(result);

var isVowel = function(letter){
  if(letter === "a" || letter === "e" || letter === "i" ||letter === "o" || letter ==="u"){
    return "true";
  }else{
    return "false";
  }
}

console.log(isVowel("c"));

var vowels = ["a", "e", "i", "o", "u"];

var isVowel = function(letter){
  if(vowels.includes(letter)){
    return "true";
  }else{
    return "false";
  }
}
console.log(isVowel("a"));

var numberArray = [8, 2, 5, 7];
var sumArray = 0;

for (var i = 0; i < numberArray.length; i++) {
  sumArray += numberArray[i];
}
console.log(sumArray);

var numberArray = [8, 2, 5, 7];

var sumArray = numberArray.reduce(function(a, b){return a+b;});

console.log(sumArray);

//PRODUCT//

var numberArray = [8, 2, 5, 7];
var productArray = 1;

for (var i = 0; i < numberArray.length; i++) {
  productArray *= numberArray[i];
}
console.log(productArray);

// var numberArray = [8, 2, 5, 7];
// var productOfArray = 1;
// for (var i = 0; i < numberArray.length; i++) {
//   productOfArray *= numberArray[i];
// }
// console.log(productOfArray);

var reverseString = function(string){
  var newString = "";
  for (var i = string.length-1; i > -1; i = i-1) {
    newString += string.charAt(i);
  }
return newString;
}
console.log(reverseString("doggy"));

for (var i = string.length; i < array.length; i++) {
  array[i]
}

var wordArray = ["cat", "doggy", "ding", "gameofthrones", "something"];
var answers = "";
var findLongestWord = function() {
  for (var i = 0; i < wordArray.length; i++) {
  if ((wordArray[i].length) > (wordArray[i+1].length)){
    answers = wordArray[i];
  }else{
    answers = wordArray[i+1];
  }
  }
  return answers;
}
console.log(findLongestWord());
