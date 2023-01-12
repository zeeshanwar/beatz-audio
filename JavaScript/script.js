console.log("Welcome to my Music Website");
// alert ("Welcome to Beatz Audio");

var pagetitle = document.querySelector('title').innerHTML  
var crnt_min=document.getElementById("crnt-min");
var crnt_sec=document.getElementById("crnt-sec");
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


// let songs = [

//     { songName: "Kalank", filepath: "audio/Kalank Title Track.mp3", albumart:"images/kalank.jpg", albumName: "Kalank Hai • 2019" },
//     { songName: "Khudi", filepath: "audio/Khudi LT.mp3", albumart: "images/khudi-local-train.jpg", albumName: "Vaaqif Tha • 2018" },
//     { songName: "Tum", filepath: "audio/Tum Laila Majnu.mp3", albumart: "images/laila-majnu.jpg", albumName: "Laila Majnu • 2018" },
//     { songName: "Muskurane", filepath: "audio/Muskurane - Citylights.mp3", albumart: "images/citylights.jpg", albumName: "Citylights • 2014" },
//     { songName: "Jaavedaan Hai", filepath: "audio/Jaavedaan Hai - 1920.mp3", albumart: "images/1920-er.jpg", albumName: "1920 - Evil Returns • 2012" },
//     { songName: "Luka Chuppi", filepath: "audio/Luka Chuppi - Rang De Basanti 128 Kbps.mp3", albumart: "images/rang-de-basanti.jpg", albumName: "Rang De Basanti • 2005" },
//     { songName: "Demons", filepath: "audio/Imagine Dragons - Demons.mp3", albumart: "images/imagine-dragons_night-visions.jpg", albumName: "Night Visions • 2012" },
//     { songName: "Barbaadiyaan", filepath: "audio/Barbaadiyan - Shiddat.mp3", albumart: "images/shiddat.jpg", albumName: "Shiddat • 2021" },
//     { songName: "Bezubaan", filepath: "audio/Bezubaan Piku.mp3", albumart: "images/piku.jpg", albumName: "Piku • 2015" },
//     { songName: "Shikayatein", filepath: "audio/Lootera-Shikayatein.mp3", albumart: "images/lootera.jpg", albumName: "Lootera • 2013" },
//     { songName: "Judaai", filepath: "audio/Judaai Badlapur.mp3", albumart: "images/badlapur-2015.jpg", albumName: "Badlapur • 2015" },
//     { songName: "Ishq", filepath: "audio/Ishq-Ali-Sethi.mp3", albumart: "images/ishq ali sethi.jpg", albumName: "Ishq • 2019" },
//     { songName: "Khulne Do", filepath: "audio/Khulne Do Chhapaak - Arijit Singh.mp3", albumart: "images/chappak.jpg", albumName: "Chhapaak • 2020" },
//     { songName: "Kaali Kaali Zulfon Ke", filepath: "audio/Kali Kali Zulfon Ke - Madhur Sharma.mp3", albumart: "images/kaali-kaali-zulfon-madhur-sharma.jpg", albumName: "Kaali Kaali Zulfon Ke • 2022" },
//     { songName: "Qaafirana", filepath: "audio/Qaafirana.mp3", albumart: "images/qaafirana-kedarnath.jpg", albumName: "Kedarnath • 2018" },
//     { songName: "Tab Bhi Tu", filepath: "audio/Tab Bhi Tu October.mp3", albumart: "images/October.jpg", albumName: "October • 2018" },
//     { songName: "Beqaabo", filepath: "audio/Beqaaboo - Gehraiyaan.mp3", albumart: "images/gehraaiyaan-poster-1.jpg", albumName: "Gehraiyaan • 2022" },
//     { songName: "Pasoori", filepath: "audio/Pasoori.mp3", albumart: "images/pasoori-ali-sethi.png", albumName: "Pasoori (Coke Studio Season 14) • 2022" },

// ]


invertcolor();


// audioElement.src=songs[songIndex].filepath;                                                      // Reading Songs from Song Array

let music_filepath = document.getElementsByClassName('songfilepath')[songIndex].src;                // Reading Audio File from DOM
let music_title = document.getElementsByClassName('s_title')[songIndex].innerText;                  // Reading Title from DOM
let music_artist = document.getElementsByClassName('s_artist')[songIndex].innerText;                // Reading Artists from DOM
let music_album = document.getElementsByClassName('s_album')[songIndex].innerText;                  // Reading Album from DOM
let music_cover = document.getElementById('current-songcover');                                     // Setting a Transparent img on musicplayer which will be replaced by current song cover on click
audioElement.src = music_filepath;                                                                  // Loading Music File
let numoftracks = document.getElementsByClassName('musicbox').length;                               // Count of no. of tracks

// tracks.lengthtracks ? console.log("Equals to " + tracks.length) :  console.log("Not Equal");

function songdetails() {

    document.getElementById('music-title').innerHTML = music_title;                             // Loading Title on Music Player
    document.getElementById('music-artist').innerHTML = music_artist;                           // Loading Artist on Music Player
    currentcover = document.getElementsByClassName('trackcoverart')[songIndex].src;             // Reading Cover from DOM
    music_cover.src = currentcover;                                                             // Updating Cover on Music Player

    }


// Handle play/pause click

    function playpause() {

        if(audioElement.paused || audioElement.currentTime<=0) {

            audioElement.play();                                                                        // Playing Song
            masterplay.innerHTML='<i class="fa-regular fa-circle-pause fa-3x"></i>';                    // Updating Pause Button
            songdetails();
            music_cover.style.opacity = "1";
            music_cover.classList.add("animate");
            
            document.querySelector('title').innerHTML = music_title + "  ▪  " + music_artist + " - " + "Beatz Audio";
            
            console.log(songIndex);
            console.log(music_title);
            console.log(music_artist);
            console.log(music_album);


            // console.log(music_cover.src);
            // console.log(music_filepath);

        }

        else {
            audioElement.pause();
            // masterplay.src='pause-button-svgrepo-com.svg';
            masterplay.innerHTML='<i class="fa-solid fa-circle-play fa-3x"></i>';
            // masterplay.classList.add('fa-play-circle');
            music_cover.style.opacity = "0";  
            document.querySelector('title').innerHTML = pagetitle;
        }
    } 
 
    masterplay.addEventListener('click', () => {
        playpause();
})

    document.addEventListener('keypress', function (e) 
    {
        if (e.key == " " || e.code == "Space")   {      
            playpause();
            e.preventDefault();

        }
    })


// Next Track
    function nexttrack() {
        
        if(songIndex>=numoftracks){
            songIndex = 0
        }
        else{
            songIndex += 1;
        }

        // audioElement.src = `songs/${songIndex+1}.mp3`;
        // audioElement.src = songs[songIndex].filepath;                                   // Track source Change

        music_filepath = document.getElementsByClassName('songfilepath')[songIndex].src;            // Reading Audio File from DOM
        music_title = document.getElementsByClassName('s_title')[songIndex].innerText;              // Reading Title from DOM
        music_artist = document.getElementsByClassName('s_artist')[songIndex].innerText;            // Reading Artists from DOM
        music_album = document.getElementsByClassName('s_album')[songIndex].innerText;              // Reading Album from DOM
        document.getElementById('music-title').innerHTML = music_title;                             // Loading Title on Music Player
        document.getElementById('music-artist').innerHTML = music_artist;                           // Loading Artist on Music Player
        currentcover = document.getElementsByClassName('trackcoverart')[songIndex].src;             // Reading Cover from DOM
        music_cover.src = currentcover;                                                             // Upadating Cover on Music Player
        audioElement.src=music_filepath;                                                            // Loading Music Track

        if(music_cover.classList.contains('currentsongexpand'))
        {
            document.getElementById('music-album').innerHTML = music_album;                 // Setting Album om Music Player after Cover Expansion
        }

        if(trackshuffle.classList.contains('shuffletrack'))
        {
            shuffle();
        }

        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove('play-button-svgrepo-com.svg');
        masterplay.classList.add('pause-button-svgrepo-com.svg');
        playspeed.classList.add('fa-face-smile');
        playpause();

    }

document.getElementById('next').addEventListener('click', ()=>{
    nexttrack();
})


// Previous Track
    function previoustrack() {
            
        if(songIndex<=0){
            songIndex = 0
        }
        else{
            songIndex -= 1;
        }

        music_filepath = document.getElementsByClassName('songfilepath')[songIndex].src;            // Reading Audio File from DOM
        music_title = document.getElementsByClassName('s_title')[songIndex].innerText;              // Reading Title from DOM
        music_artist = document.getElementsByClassName('s_artist')[songIndex].innerText;            // Reading Artists from DOM
        music_album = document.getElementsByClassName('s_album')[songIndex].innerText;              // Reading Album from DOM
        document.getElementById('music-title').innerHTML = music_title;                             // Setting Title on Music Player
        document.getElementById('music-artist').innerHTML = music_artist;                           // Setting Artist on Music Player
        currentcover = document.getElementsByClassName('trackcoverart')[songIndex].src;             // Reading Cover from DOM
        console.log(currentcover);
        music_cover.src = currentcover;                                                             // Upadating Cover on Music Player
        audioElement.src = music_filepath;                                                          // Loading Music Track

        if(music_cover.classList.contains('currentsongexpand'))
        {
            document.getElementById('music-album').innerHTML = music_album;                 // Setting Album om Music Player after Cover Expansion
        }

        if(trackshuffle.classList.contains('shuffletrack'))
        {
            shuffle();                                                                      // Shuffling Tracks when Shuffle is on
        }

        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove('play-button-svgrepo-com.svg');
        masterplay.classList.add('play-button-svgrepo-com.svg');
        playspeed.classList.add('fa-face-smile');
        playpause();
    }

document.getElementById('previous').addEventListener('click', ()=>{

    if(currentsec <=05 && currentmin==0 ){
    previoustrack();
    }
    else{
        audioElement.src = music_filepath;
        audioElement.play();
        playspeed.classList.add('fa-face-smile');
    }
})



// Shuffling Tracks

let trackshuffle = document.getElementById('shuffle');

trackshuffle.addEventListener('click', ()=> {
    
    if(trackshuffle.classList.contains('shuffletrack') == false)
    {
        trackshuffle.classList.add('shuffletrack');
    }
    else if(trackshuffle.classList.contains('shuffletrack'))
    {
        trackshuffle.classList.remove('shuffletrack');
    }

    // console.log(trackshuffle.classList.contains('trackshuffletrack'));
})


    function shuffle() {
            
        if(songIndex>=numoftracks){
            songIndex = 0;
        }
        else{
            songIndex = Math.floor(Math.random() * numoftracks);
        }

        music_filepath = document.getElementsByClassName('songfilepath')[songIndex].src;            // Reading Audio File from DOM
        music_title = document.getElementsByClassName('s_title')[songIndex].innerText;              // Reading Title from DOM
        music_artist = document.getElementsByClassName('s_artist')[songIndex].innerText;            // Reading Artists from DOM
        music_album = document.getElementsByClassName('s_album')[songIndex].innerText;              // Reading Album from DOM
        document.getElementById('music-title').innerHTML = music_title;                             // Loading Title on Music Player
        document.getElementById('music-artist').innerHTML = music_artist;                           // Loading Artist on Music Player
        currentcover = document.getElementsByClassName('trackcoverart')[songIndex].src;             // Reading Cover from DOM
        music_cover.src = currentcover;                                                             // Upadating Cover on Music Player
        audioElement.src=music_filepath;                                                            // Loading Music Track

        if(music_cover.classList.contains('currentsongexpand')){
            document.getElementById('music-album').innerHTML = music_album;                 // Setting Album om Music Player after Cover Expansion
        }

        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove('play-button-svgrepo-com.svg');
        masterplay.classList.add('pause-button-svgrepo-com.svg');
        playpause();
    }


// Like Button

// let likeheart = document.getElementById('likeheart');

// likeheart.addEventListener('click', ()=>{

//     if(likeheart.classList.contains("fa-regular"))
//     {
//         likeheart.classList.remove("fa-regular");
//         likeheart.classList.add("fa-solid");
//         likeheart.style.color = "crimson";
//     }
//     else if(likeheart.classList.contains("fa-solid"))
//     {
//         likeheart.classList.remove("fa-solid");
//         likeheart.classList.add("fa-regular");
//         likeheart.style.color = "black";
//     } 

//     playbackspeed();
// })



// Playback Speed

    function playbackspeed() {

        let playspeed = document.getElementById('playspeed');
        let slow = 0.5;
        let normal = 1;
        let fast = 2.5;

        playspeed.addEventListener('click', ()=>{

            if(audioElement.playbackRate == normal)
            {
                // playbackspeed();
                audioElement.playbackRate = fast;                                               // Setting Normal Playback to Fast
                playspeed.classList.remove('fa-face-smile');
                playspeed.classList.add('fa-face-dizzy');
            }
            
            else if(audioElement.playbackRate == fast)
            {
                audioElement.playbackRate = slow;                                               // Setting Fast Playback to Slow
                playspeed.classList.remove('fa-face-dizzy');
                playspeed.classList.add('fa-face-surprise');
            }
            
            else if(audioElement.playbackRate == slow)
            {
                audioElement.playbackRate = normal;                                             // Setting Slow Playback to Normal
                playspeed.classList.remove('fa-face-surprise');
                playspeed.classList.add('fa-face-smile');
            }
            // document.getElementsByClassName('playbackspeed')[0].style.color = "crimson";
        })

    }

playbackspeed();



// Cover Expand on Click

let expanded = 0;
    document.getElementById('current-songcover').addEventListener('click', ()=>{

        if(music_cover.classList.contains('currentsongexpand') == false)                                   // Checking if cover is not expanded
        {
            music_cover.classList.add('currentsongexpand');                                                // Expanding the cover
            document.getElementById('music-album').innerHTML = music_album;                                // Displaying Current ALbum on Cover Expansion
            expanded = 1;
            // document.getElementsByClassName('musicplayer-right')[0].innerHTML = "expanded";
        }

        else if(music_cover.classList.contains('currentsongexpand'))                                      // Checking if cover is expanded
        {
            music_cover.classList.remove('currentsongexpand');                                            // Contracting (Unexpanding) the Cover
            document.getElementById('music-album').innerHTML = '';                                        // Hididng Current Album on Cover Contraction
            expanded = 0;
        }
    })



// Page Color Invertion

    function invertcolor() {

        let invrt = document.getElementById('invrt');
        let rootelement = document.querySelector("*");
        let allimgs = document.getElementsByTagName('img');

        // console.log(allimgs);
        // console.log(rootelement);
        // rootelement.classList.add('invrt');

        let inverted = 0;
        invrt.addEventListener('click', ()=>{

            if(inverted == 0)
            {
                rootelement.style.filter = "invert(100%)";
                // rootelement.classList.add('invert');
                inverted = 1;
                invrt.children[0].src = "images/lightbulb-regular.svg"

                for(p=0; p<=allimgs.length; p++)
                {
                    document.getElementsByTagName('img')[p].style.filter = "invert(100%)";
                    // console.log(p);
                    // console.log(document.getElementsByTagName('img')[p]);
                }
            }
            
            else if (inverted == 1)
            {
                rootelement.style.filter = "invert(0%)";
                // rootelement.classList.remove('invert');
                inverted = 0;
                invrt.children[0].src = "images/lightbulb-solid.svg"

                for(p=0; p<=allimgs.length; p++)
                {
                    document.getElementsByTagName('img')[p].style.filter = "invert(0%)";
                    // console.log(p);
                    // console.log(document.getElementsByTagName('img')[p]);
                }
            }

        })

    }


// Tracks Timer


// Current Duration timer

function current_dur() {
    let cmin=parseInt((audioElement.currentTime/60));
    let csec=Math.round(audioElement.currentTime%60);
    if(csec<10)
    csec="0"+csec;
    if(cmin<10)
    cmin="0"+cmin;
    crnt_min.innerHTML=cmin;
    crnt_sec.innerHTML=csec; 
    currentsec = csec;
    currentmin = cmin;
}

//Total Duration of the track

function total_dur() {
    let tmin=parseInt((duration_count/60));
    let tsec=Math.round(duration_count%60);
    if(tsec<10)
    tsec="0"+tsec;
    if(tmin<10)
    tmin="0"+tmin;
    dur_min.innerHTML=tmin;
    dur_sec.innerHTML=tsec;
    totalsec = tsec;  
    totalmin = tmin;
}


// Listen to Events

// Update Seekbar
audioElement.addEventListener('timeupdate', ()=>{ 
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
    current_dur();

    if(currentmin==totalmin && currentsec==totalsec)
    {
        nexttrack();
    }
    console.log("The Current Time is: " + currentmin + " min " + currentsec + " sec " );
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

//Loads track duration
audioElement.addEventListener('loadedmetadata',()=>{
    duration_count=audioElement.duration;
    total_dur(); 
    console.log("The Total Time is: " + totalmin + " min " + totalsec + " sec " );
},false);  

// console.log(parseInt(duration_count));

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
        masterplay.classList.remove('play-button-svgrepo-com.svg');
        masterplay.classList.add('play-button-svgrepo-com.svg');
        //gif.style.opacity = 1;
    })
})









songobj =   { 
    songName: music_title,
    albumName: music_album,
    artistName: music_artist,
    filepath: music_filepath,
    albumart: music_cover.src
}


// console.log(songobj);






// console.log(invert.children[0].src);


// invert.addEventListener('click', ()=>{

//     if(rootelement.ClassList.contains('invert') == false)
//     {
//         rootelement.classList.add('invert');
//         inverted = 1;

//     }
//     else if (rootelement.ClassList.contains('invert'))
//     {
//         rootelement.classList.remove('invert');
//     }

// })


// let checking = document.documentElement;
// console.log(checking);
// checking.classList.add('invert');

// document.querySelector(':root').style.setProperty('--invertvalue', 'green;');

// document.getElementById('tracks').style.setProperty('color', 'green;');

    // document.documentElement.style.setProperty('color', 'green;');


// console.log(invert);






// let expanded = 0;
//     document.getElementById('current-songcover').addEventListener('click', ()=>{

//             music_cover.classList.add('currentsongexpand');
//             expanded = 1;
//             document.getElementById('music-album').innerHTML = music_album;
//             // document.getElementsByClassName('musicplayer-right')[0].innerHTML = "expanded";
//     })

//     document.getElementById('current-songcover').addEventListener('dblclick', ()=>{
        
//         if(expanded == 1) {
//             music_cover.classList.remove('currentsongexpand');
//             document.getElementById('music-album').innerHTML = '';
//             expanded = 0;
//             }
//         // expanded == 0 ? music_cover.classList.add('currentsongexpand') : music_cover.classList.remove('currentsongexpand');
//     })








// audioElement.src=songs[songIndex].filepath;                                                    // Reading Songs from Song Array


// music_cover = document.getElementsByClassName('trackcoverart')[songIndex];   //important


// console.log(masterSongName);
// console.log(songItems);


// if (crnt_min.innerHTML==dur_min.innerHTML && crnt_sec.innerHTML==dur_sec.innerHTML) {
//     nexttrack();
//     }


// let k=0;
// while(tracks) {    
//     var music_title = songs[k].songName;
//     console.log(music_title);
//     k++;
//     }


// songItems.forEach((element, i)=>{ 
//     element.getElementsByTagName("img")[0].src = songs[i].filepath; 
//     element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
//     })


// masterplay.addEventListener('click', ()=>{
//     musicplayer_left.appendChild(document.createTextNode("This is Left"));
// }


        // music_title = songs[songIndex].songName;
        // music_artist = document.getElementsByClassName('s_artist')[songIndex].innerText;
        // music_album = songs[songIndex].albumName;
        // document.getElementById('music-title').innerHTML = music_title;
        // document.getElementById('music-artist').innerHTML = music_artist;
        // music_cover.src = songs[songIndex].albumart;
        //  let currentcover = document.getElementById('songcover').src;




// Muskurane Citylights 
// Kaali Kaali Zulfon Madhur Sharma
// Judaai Badlapur
// jaavedan hai 1920
// Bismil Haider
// dil darbadar pk
// mechanical sundariye 2.0
// naina yeh article 15
// tere siva jag mein tadap
// show me the meaning of being lonely
// tere siva delhi belly
// jeena chahun shivansh jindal