let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctr1Icon = document.getElementById("ctr1Icon");


song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}
function playPause(){
    if(ctr1Icon.classList.contains("fa-pause")){
        song.pause();
        ctr1Icon.classList.remove("fa-pause");
        ctr1Icon.classList.add("fa-play");
    }
    else{
        song.play();
        ctr1Icon.classList.add("fa-pause");
        ctr1Icon.classList.remove("fa-play");
    }
}
if(song.play()){
    setInterval(() => {
        progress.value = song.currentTime;
    }, 500);
}
progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    ctr1Icon.classList.add("fa-pause");
    ctr1Icon.classList.remove("fa-play");
}