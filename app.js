let header = document.querySelector('header')
window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

// for slider
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 3,
    // autoplay:true,
    autoplaySpeed: 2500,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: "page1",
      clickable: true,
    },
    navigation: {
      nextEl: ".button1",
      prevEl: ".button2",
    },
    breakpoints: {
        320:{
            slidesPerView: 1
        },
        528:{
            slidesPerView: 2
        },
        861: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4
        }
      }
  });



  var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 3,
    // autoplay:true,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".page2",
      clickable: true,
    },
    navigation: {
      nextEl: ".button3",
      prevEl: ".button4",
    },
    breakpoints: {
        320:{
            slidesPerView: 1
        },
        528:{
            slidesPerView: 2
        },
        861: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4
        }
      }
  });



  var swiper = new Swiper(".mySwiper3", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    // autoplay:true,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".page3",
      clickable: true,
    },
    navigation: {
      nextEl: ".button5",
      prevEl: ".button6",
    },
    breakpoints: {
        320:{
            slidesPerView: 1
        },
        528:{
            slidesPerView: 2
        },
        861: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4
        }
      }
  });



const music = document.getElementById('song1');
// const img =document.querySelector('img1');
const play = document.getElementById("play1");
// for playing music 
let isplaying=false ;
const playMusic = ()=>{
    isplaying=true;
    music.play();
    document.getElementById("play1").textContent="pause";
    play.classList.add("anime");
};
// for pausing music
const pauseMusic = ()=>{
    isplaying=false;
    music.pause();
    document.getElementById("play1").textContent="play";
    play.classList.add("anime");
};

play.addEventListener("click",()=>{
    if(isplaying){
        pauseMusic();
    }
    else{
        playMusic();
    }
});



const music2 = document.getElementById('song2');
const play2 = document.getElementById("play2");
let isplaying2=false ;
const playMusic2 = ()=>{
    isplaying2=true;
    music2.play();
    document.getElementById("play2").textContent="pause";
    play2.classList.add("anime");
};
// for pausing music
const pauseMusic2 = ()=>{
    isplaying2=false;
    music2.pause();
    document.getElementById("play2").textContent="play";
    play2.classList.add("anime");
};

play2.addEventListener("click",()=>{
    if(isplaying2){
        pauseMusic2();
    }
    else{
        playMusic2();
    }
});


const music3 = document.getElementById('song3');
const play3 = document.getElementById("play3");
let isplaying3=false ;
const playMusic3 = ()=>{
    isplaying3=true;
    music3.play();
    document.getElementById("play3").textContent="pause";
    play3.classList.add("anime");
};
// for pausing music
const pauseMusic3 = ()=>{
    isplaying3=false;
    music3.pause();
    document.getElementById("play3").textContent="play";
    play3.classList.add("anime");
};

play3.addEventListener("click",()=>{
    if(isplaying3){
        pauseMusic3();
    }
    else{
        playMusic3();
    }
});



const music4 = document.getElementById('song4');
const play4 = document.getElementById("play4");
let isplaying4=false ;
const playMusic4 = ()=>{
    isplaying4=true;
    music4.play();
    document.getElementById("play4").textContent="pause";
    play4.classList.add("anime");
};
// for pausing music
const pauseMusic4 = ()=>{
    isplaying4=false;
    music4.pause();
    document.getElementById("play4").textContent="play";
    play4.classList.add("anime");
};

play4.addEventListener("click",()=>{
    if(isplaying4){
        pauseMusic4();
    }
    else{
        playMusic4();
    }
});


const music5 = document.getElementById('song5');
const play5 = document.getElementById("play5");
let isplaying5=false ;
const playMusic5 = ()=>{
    isplaying5=true;
    music5.play();
    document.getElementById("play5").textContent="pause";
    play5.classList.add("anime");
};
// for pausing music
const pauseMusic5 = ()=>{
    isplaying5=false;
    music5.pause();
    document.getElementById("play5").textContent="play";
    play5.classList.add("anime");
};

play5.addEventListener("click",()=>{
    if(isplaying5){
        pauseMusic5();
    }
    else{
        playMusic5();
    }
});


const music6 = document.getElementById('song6');
const play6 = document.getElementById("play6");
let isplaying6 =false ;
const playMusic6 = ()=>{
    isplaying6=true;
    music6.play();
    document.getElementById("play6").textContent="pause";
    play5.classList.add("anime");
};
// for pausing music
const pauseMusic6 = ()=>{
    isplaying6=false;
    music6.pause();
    document.getElementById("play6").textContent="play";
    play6.classList.add("anime");
};

play6.addEventListener("click",()=>{
    if(isplaying6){
        pauseMusic6();
    }
    else{
        playMusic6();
    }
});

const music7 = document.getElementById('song7');
const play7 = document.getElementById("play7");
let isplaying7 =false ;
const playMusic7 = ()=>{
    isplaying7=true;
    music7.play();
    document.getElementById("play7").textContent="pause";
    play7.classList.add("anime");
};
// for pausing music
const pauseMusic7 = ()=>{
    isplaying7=false;
    music7.pause();
    document.getElementById("play7").textContent="play";
    play7.classList.add("anime");
};

play7.addEventListener("click",()=>{
    if(isplaying7){
        pauseMusic7();
    }
    else{
        playMusic7();
    }
});



const music8 = document.getElementById('song8');
const play8 = document.getElementById("play8");
let isplaying8 =false ;
const playMusic8 = ()=>{
    isplaying8=true;
    music8.play();
    document.getElementById("play8").textContent="pause";
    play8.classList.add("anime");
};
// for pausing music
const pauseMusic8= ()=>{
    isplaying8=false;
    music8.pause();
    document.getElementById("play8").textContent="play";
    play8.classList.add("anime");
};

play8.addEventListener("click",()=>{
    if(isplaying8){
        pauseMusic8();
    }
    else{
        playMusic8();
    }
});


const music9 = document.getElementById('song9');
const play9 = document.getElementById("play9");
let isplaying9 =false ;
const playMusic9 = ()=>{
    isplaying9=true;
    music9.play();
    document.getElementById("play9").textContent="pause";
    play9.classList.add("anime");
};
// for pausing music
const pauseMusic9= ()=>{
    isplaying9=false;
    music9.pause();
    document.getElementById("play9").textContent="play";
    play9.classList.add("anime");
};

play9.addEventListener("click",()=>{
    if(isplaying9){
        pauseMusic9();
    }
    else{
        playMusic9();
    }
});