console.log("Welcome to my Music Website");
alert ("Welcome to Beatz Audio");  
var start_min=document.getElementById("start-min");
var start_sec=document.getElementById("start-sec");
var dur_min=document.getElementById("dur-min");
var dur_sec=document.getElementById("dur-sec");
var duration_count;

//Initialize the variables
let songIndex = 0;

// let audioElement = new Audio('audio/Kalank - Title Track.mp3');
const audioElement=document.createElement("audio");
let myProgressBar=document.getElementById("track-progress-bar");
let masterplay= document.getElementById('masterplay');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "Kalank", filepath: "Title Track.mp3", coverpath: "audio/Kalank - Title Track.mp3" },
    { songName: "Khudi", filepath: "Khudi.mp3", coverpath: "audio/Khudi.mp3" },
    { songName: "Tum", filepath: "Tum (Laila Majnu).mp3", coverpath: "audio/Tum (Laila Majnu).mp3" },
    { songName: "Luka Chuppi", filepath: "Luka Chuppi - Rang De Basanti 128 Kbps.mp3", coverpath: "audio/Luka Chuppi - Rang De Basanti 128 Kbps.mp3" },
    { songName: "Demons", filepath: "Imagine Dragons - Demons.mp3", coverpath: "audio/Imagine Dragons - Demons.mp3" },
    { songName: "Barbaadiyaan", filepath: "Barbaadiyan - Shiddat.mp3", coverpath: "audio/Barbaadiyan - Shiddat.mp3" },
    { songName: "Bezubaan", filepath: "Bezubaan Piku.mp3", coverpath: "audio/Bezubaan Piku.mp3" },
    { songName: "Shikayatein", filepath: "Lootera-Shikayatein.mp3", coverpath: "audio/Lootera-Shikayatein.mp3" },
    { songName: "Ishq", filepath: "Ishq-Ali-Sethi.mp3", coverpath: "audio/Ishq-Ali-Sethi.mp3" },
    { songName: "Khulne Do", filepath: "Khulne Do Chhapaak - Arijit Singh.mp3", coverpath: "audio/Khulne Do Chhapaak - Arijit Singh.mp3" },
    { songName: "Tab Bhi Tu", filepath: "Tab Bhi Tu October.mp3", coverpath: "audio/Tab Bhi Tu October.mp3" },
    { songName: "Beqaabo", filepath: "Beqaaboo - Gehraiyaan.mp3", coverpath: "audio/Beqaaboo - Gehraiyaan.mp3" },

]


songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverpath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 audioElement.src=songs[songIndex].coverpath;

// Handle play/pause click
masterplay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        // masterplay.classList.remove('play-button-svgrepo-com.svg');
        // masterplay.classList.add('pause-button-svgrepo-com.svg');
        masterplay.innerHTML='<i class="fa-solid fa-circle-pause fa-2x"></i>';
        
    }
    else{
        audioElement.pause();
        // masterplay.src='pause-button-svgrepo-com.svg';
        masterplay.innerHTML='<i class="fa-solid fa-circle-play fa-2x"></i>';
        // masterplay.classList.add('fa-play-circle');
        
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
    dur();
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('play-button-svgrepo-com.svg');
        element.classList.add('pause-button-svgrepo-com.svg');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        //gif.style.opacity = 1;
        masterplay.classList.remove('play-button-svgrepo-com.svg');
        masterplay.classList.add('play-button-svgrepo-com.svg');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    // audioElement.src = `songs/${songIndex+1}.mp3`;
    audioElement.src = songs[songIndex].coverpath;
    // masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('play-button-svgrepo-com.svg');
    masterplay.classList.add('pause-button-svgrepo-com.svg');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    // audioElement.src = `songs/${songIndex+1}.mp3`;
    audioElement.src = songs[songIndex].coverpath;
    // masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('play-button-svgrepo-com.svg');
    masterplay.classList.add('play-button-svgrepo-com.svg');
})

//Duration timer
function dur(){
    let min=parseInt((audioElement.currentTime/60));
    let sec=Math.round(audioElement.currentTime%60)
    if(sec<10)
    sec="0"+sec;
    start_min.innerHTML=min;
    start_sec.innerHTML=sec;
    
}

//Loads track duration
audioElement.addEventListener('loadedmetadata',()=>{
    duration_count=audioElement.duration;
    total_dur();
},false);
//Total Suration of the track
function total_dur(){
    let min=parseInt((duration_count/60));
    let sec=Math.round(duration_count%60);
    if(sec<10)
    sec="0"+sec;
    dur_min.innerHTML=min;
    dur_sec.innerHTML=sec;  
}
