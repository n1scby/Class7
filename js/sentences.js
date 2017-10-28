var userName = document.getElementById("user-name");
var sentenceButton = document.getElementById("sentence-button");
var clearButton = document.getElementById("clear-button");
var displayArea = document.getElementById("sentence");
var phrases1 = ["Once upon a time", "In a land far far away", 
"On a dark and stormy night", "As the sun was setting in the west"];
var phrases2 = ["a grumpy ogre called ", "a weary traveler named", 
"a giant squid called ", "one small unicorn called", "a shy elphant called",
"a precious flower called", "a Great Dane named "];
var phrases3 = ["grew a beard", "had a glass of wine", 
"watched a puppet show", "pranced around with balloons", "snuck into the movie theater",
"poked a bear", "taught a class on javascript", "put on a tutu", 
"solved a mystery"];

sentenceButton.addEventListener("click", function(){
 displayArea.innerHTML = "<br>" + getPhrase(phrases1) + " " +
  getPhrase(phrases2) + " " + userName.value + " " + 
  getPhrase(phrases3) + "." + "<br>";
 

});

clearButton.addEventListener("click", function(){
 displayArea.innerHTML=" ";
 userName.value = " ";
});

var getRandomNumber = function getRandomNumber(min, max){
    max = Math.floor(max);
    min = Math.ceil(min);
    return Math.floor(Math.random() * (max - min +1) + min);
};


var getPhrase = function getPhrase(phrase){
  var result = getRandomNumber(0, phrase.length - 1);
  return phrase[result];
}
