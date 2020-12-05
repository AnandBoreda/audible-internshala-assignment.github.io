const audio = document.getElementById("audio");

const play = document.getElementById("play");
const pause = document.getElementById("pause");
const stop = document.getElementById("stop");

//check if lcoalstorage contains previous bookmarks and update the source with the same 
function setBookmark(){
    var pos = localStorage.getItem("seek");
    console.log("bookmarked seek position is "+pos);
    audio.currentTime = pos;
}

// set bookmark to localstorage
function bmark(){

    bookmark = audio.currentTime;
    localStorage.setItem("seek",bookmark);
    console.log(bookmark);
}

// play audio 
function playAudio(){
    play.style.display = "none";
    pause.style.display = "block";
    audio.play();
}
// pause audio
function pauseAudio(){
    play.style.display = "block";
    pause.style.display = "none";
    audio.pause();
}
// stop audio
function stopAudio(){
    audio.pause();
    audio.currentTime = 0;
}