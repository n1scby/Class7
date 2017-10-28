var drinkButton = document.getElementById("drink");
var songButton = document.getElementById("juke-box");

songButton.addEventListener("click", function(){

window.location.href("playSong.html");

});


drinkButton.addEventListener("click", function(){

    var result = getRandomNumber(0, 2);
    if (result == 0) {
    
        window.location.href("water.html");
    } else
    if (result == 1) {
        
        window.location.href("rootbeer.html");
    } else
    if (result == 2) {

        window.location.href("margarita.html");
    };
    

});

