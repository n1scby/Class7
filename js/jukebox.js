
var displaySong = document.getElementById("song-title");

var songs = ["Celebration", "The Rainbow Connection", "Thunder", 
"Renegade", "Mmm...Bop!", "Eat It!", "We are the Champions.", 
"Friends in Low Places", "You've got a Friend in me."];

var songNumber = getRandomNumber(1, songs.length-1);
displaySong.innerHTML = songs[songNumber];

