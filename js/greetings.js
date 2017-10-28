// JavaScript source code
var textBox = document.getElementById("text-name");
var greetingsButton = document.getElementById("greetings-button");
var helloButton = document.getElementById("hello-button");
var backAtYaButton = document.getElementById("back-at-ya-button");
var howdyButton = document.getElementById("howdy-button");
var greetingArea = document.getElementById("greeting-area");


greetingsButton.addEventListener("click", function() {
    //printArea.innerText = "Greetings, " + textBox.value + "!";
    greet(greetingsButton);
});

helloButton.addEventListener("click", function() {
    //printArea.innerText = "Hello " + textBox.value + "!";
    greet(helloButton);
});

backAtYaButton.addEventListener("click", function () {
   // printArea.innerText = "Back at ya, " + textBox.value + "!";
   greet(backAtYaButton);
});

howdyButton.addEventListener("click", function () {
    //printArea.innerText = "Howdy, " + textBox.value + "!";
    greet(howdyButton);
});

var greet = function greet(button) {
    greetingArea.innerHTML = button.value + ", " + textBox.value + "!";
};