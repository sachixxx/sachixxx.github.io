
let play_btn = document.querySelector("#play");

let range = document.querySelector("#range");
let play_img = document.querySelector("#play_img")

let total_time = 0;
let currentTime = 0;
let isPlaying = false;
let song = new Audio('/media/NOORDERZON.mp3');
window.onload = playSong;


let play_btn1 = document.querySelector("#play1");

let range1 = document.querySelector("#range1");
let play_img1 = document.querySelector("#play_img1")

let total_time1 = 0;
let currentTime1 = 0;
let isPlaying1 = false;
let song1 = new Audio("/media/Poprygushki.mp3");
window.onload = playSong1;



function playSong(){
   
    
    
    play_btn.addEventListener('click',function(){
        if(!isPlaying){
            song.play();
            isPlaying = true;
            total_time = song.duration;
            range.max = total_time;
            play_img.src = "/media/cheb.png";
        }else{
            song.pause();
            isPlaying = false;
            play_img.src = "/media/play.png";
        }
       song.addEventListener('ended',function(){
            song.currentTime = 0
            song.pause();
            isPlaying = false;
            range.value = 0;
            play_img.src = "/media/play.png";
        })
        song.addEventListener('timeupdate',function(){
            range.value = song.currentTime;
        })
        range.addEventListener('change',function(){
            song.currentTime = range.value;
        })
       
    })
}


function playSong1(){

    
    
    play_btn1.addEventListener('click',function(){
      if(!isPlaying1){
          song1.play();
          isPlaying1 = true;
          total_time1 = song1.duration;
          range1.max = total_time1;
          play_img1.src = "/media/cheb.png";
      }else{
          song1.pause();
          isPlaying1 = false;
          play_img1.src = "/media/play.png";
      }
     song1.addEventListener('ended',function(){
          song1.currentTime1 = 0
          song1.pause();
          isPlaying1 = false;
          range1.value = 0;
          play_img1.src = "/media/play.png";
      })
      song1.addEventListener('timeupdate',function(){
          range1.value = song1.currentTime1;
      })
      range1.addEventListener('change',function(){
          song1.currentTime1 = range1.value;
      })
     
    })
    }
