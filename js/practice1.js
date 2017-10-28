var textBox = document.getElementById("display-text");
var printButton = document.getElementById("print-button");
var clearButton = document.getElementById("clear-button");
var printArea = document.getElementById("print-area");

//alert("is this working?")
printButton.addEventListener("click", function(){
    //var text = textBox.value;
    printArea.innerText = textBox.value;
});

clearButton.addEventListener("click", function() {
    printArea.innerText= "";
});
