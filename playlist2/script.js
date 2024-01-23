console.log("Welcome to Stereo");

let songIndex=0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let playbar= document.getElementById('playbar');
let volume=document.getElementById('volume');

let gif= document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {songName:"Believer-Imagine Dragons",filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName:"Let Me Love You-Justin Biber,Dj Snake", filePath: "songs/2.mp3", coverPath:"covers/2.jpg"},
    {songName:"Challa (Main Lad Jaana)-Romy,Vivek Hariharan,ShashwatSachdev", filePath: "songs/3.mp3", coverPath:"covers/3.jpg"},
    {songName:"On My Way-Alan Walkar,Sabrina Carpenter,Farruko", filePath: "songs/4.mp3", coverPath:"covers/4.jpg"},
    {songName:"Get Ready To Fight-Benny Dayal,Siddharth Basrur", filePath: "songs/5.mp3", coverPath:"covers/5.jpg"},
    {songName:"Brothers Anthem-Ajay-Atul,Vishal Dadlani", filePath: "songs/6.mp3", coverPath:"covers/6.jpg"},
    {songName:"Thunder-Imagine Dragons", filePath: "songs/7.mp3", coverPath:"covers/7.jpg"},
    {songName:"Zinda-Siddharth Mahadevan,Shankar Ehsaan Loy", filePath: "songs/8.mp3", coverPath:"covers/8.jpg"},
    {songName:"Sultan-Sukhwinder Singh,Shadab Faridi", filePath: "songs/9.mp3", coverPath:"covers/9.jpg"},
    {songName:"Kar Har Maidan Fateh-Sukhwinder Singh,Shreya Ghoshal", filePath: "songs/10.mp3", coverPath:"covers/10.jpg"},
    {songName:"Khalibali-Shivam Pathak,Shail Hada", filePath: "songs/11.mp3", coverPath:"covers/11.jpg"},
    {songName:"Apna Time Ayega-Ranveer Singh,Dub Sharma", filePath: "songs/12.mp3", coverPath:"covers/12.jpg"},
]
songItems.forEach((element,i)=>{
  
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
    

})
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})
audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    playbar.value=progress;
})
playbar.addEventListener('change',()=>{
    audioElement.currentTime=playbar.value*audioElement.duration/100;
})
function setVolume(){
    audioElement.volume=volume.value/100
}
const makeAllPlays= ()=>{
    Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex =parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        
        
    })
    
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=11){
        songIndex=0
        
    }
    else{
        songIndex+=1;
        
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0
    }
    else{
        songIndex-=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
