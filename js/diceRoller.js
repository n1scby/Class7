var rollButton = document.getElementById("roll-dice-button");
var resetButton = document.getElementById("reset");
var displayArea = document.getElementById("display-area");
var count = 0;

rollButton.addEventListener("click", function(){
    if (count == 0) {
        displayArea.innerHTML = "<p>The rolled amount is:<br></p>"
        count++;
    }
displayArea.innerHTML += getRandomNumber(1, 6) + "<br>";

});

resetButton.addEventListener("click", function(){
 displayArea.innerHTML=" ";
 count = 0;

});


var getRandomNumber = function getRandomNumber(min, max){
    max = Math.floor(max);
    min = Math.ceil(min);
    return Math.floor(Math.random() * (max - min +1) + min);
};
