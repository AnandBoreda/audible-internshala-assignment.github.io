const audio = document.getElementById("audio");

function setBookmark(){
    var pos = localStorage.getItem("seek");
    
    console.log("bookmarked seek position is "+pos);

    audio.currentTime = pos;
}
  
function bmark(){

    bookmark = audio.currentTime;
    localStorage.setItem("seek",bookmark);
    console.log(bookmark);
}

const play = document.getElementById("play");
const pause = document.getElementById("pause");
const stop = document.getElementById("stop");

function playAudio(){
    play.style.display = "none";
    pause.style.display = "block";
    audio.play();
}
function pauseAudio(){
    play.style.display = "block";
    pause.style.display = "none";
    audio.pause();
}

function stopAudio(){
    audio.pause();
    audio.currentTime = 0;
}