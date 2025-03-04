var song = document.getElementById("audio");
var playPauseButton = document.getElementById("play_pause_button");
var nextButton = document.getElementById("next_button");
var prevButton = document.getElementById("previous_button");

playPauseButton.addEventListener("click", () => { // NOTE:wenn gecklickt wird 
    if (song.paused) {// Und der song pausiert
      song.play();// Wird die play Funktion ausgeführt
      playPauseButton.classList.remove("btn_play"); // Die classe wird entfertn
      playPauseButton.classList.add("btn_pause");// eine klasse wird hinzugefügt
    } else {
      song.pause();// adernfals wenn der song läuft wird er pausiert 
      playPauseButton.classList.remove("btn_pause");
      playPauseButton.classList.add("btn_play");
    }
});
  
// IDEA: Eine Variable für die direcoriy erstellen und durch sie durch iterieren


var audioDuration = song.duration;

var duration = document.getElementById("duration");
function updateDuration() {
    var currentTime = song.currentTime;
    var minutes = Math.floor(currentTime / 60);
    var seconds = Math.floor(currentTime % 60);

    duration.innerHTML = minutes + ":" + (seconds < 10? "0" : "") + seconds;

}


song.addEventListener('timeupdate', updateDuration);