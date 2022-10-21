// header scrolling 

// let audioElement2 = new Audio('songs/5.mp3');
// var play1=document.getElementById('02');
// play1.addEventListener('click', () => {
//   if (audioElement2.currentTime <= 0) {
//       audioElement2.play();
//       masterPlay.classList.remove('fa-play-circle');
//       masterPlay.classList.add('fa-pause-circle');
//       gif.style.opacity = 1;
//   } else {
//       audioElement2.pause();
//       masterPlay.classList.remove('fa-pause-circle');
//       masterPlay.classList.add('fa-play-circle');
//       gif.style.opacity = 0;
//   }
// })

let audioElement3 = new Audio('songs/9.mp3');
var play1=document.getElementById('03');
play1.addEventListener('click', () => {
  if (audioElement3.currentTime <= 0) {
      audioElement3.play();
      masterPlay.classList.remove('fa-play-circle');
      masterPlay.classList.add('fa-pause-circle');
      gif.style.opacity = 1;
  } else {
      audioElement3.pause();
      masterPlay.classList.remove('fa-pause-circle');
      masterPlay.classList.add('fa-play-circle');
      gif.style.opacity = 0;
  }
})



let header = document.querySelector('header')
window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

// for slider
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 3,
    autoplay:true,
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

//playing songs
  console.log("Welcome to Spotify");

  // Initialize the Variables
  let songIndex = 0;
  let audioElement = new Audio('songs/1.mp3');
  // audioElement.play();
  let masterPlay = document.getElementById('masterPlay');
  let myProgressBar = document.getElementById('myProgressBar');
  let gif = document.getElementById('gif');
  let masterSongName = document.getElementById('masterSongName');
  let songItems = Array.from(document.getElementsByClassName('name-profession'));

  let songs = [
    { songName: "Best of Me", filePath: "songs/1.mp3" },
    { songName: "Grateful", filePath: "songs/2.mp3" },
    { songName: "cold", filePath: "songs/3.mp3" },
    { songName: "Rumors", filePath: "songs/4.mp3" },
    { songName: "fight back", filePath: "songs/5.mp3" },
    { songName: "Careless", filePath: "songs/6.mp3" },
    { songName: "failure", filePath: "songs/7.mp3" },
    { songName: "destiny", filePath: "songs/8.mp3" },
    { songName: "Light it up", filePath: "songs/9.mp3" },
    { songName: "Bros B4", filePath: "songs/10.mp3" },
]


// Handle play/pause click
masterPlay.addEventListener('click', () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
      audioElement.play();
      masterPlay.classList.remove('fa-play-circle');
      masterPlay.classList.add('fa-pause-circle');
      gif.style.opacity = 1;
  } else {
      audioElement.pause();
      masterPlay.classList.remove('fa-pause-circle');
      masterPlay.classList.add('fa-play-circle');
      gif.style.opacity = 0;
  }
})
// Listen to Events
audioElement.addEventListener('timeupdate', () => {
// Update Seekbar
progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
myProgressBar.value = progress;
})

// Listen to Events
audioElement.addEventListener('timeupdate', () => {
// Update Seekbar
progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
 myProgressBar.value = progress;
})


myProgressBar.addEventListener('change', () => {
  audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})


document.getElementById('next').addEventListener('click', () => {
  if (songIndex >= 9) {
      songIndex = 0
  } else {
      songIndex += 1;
  }
  audioElement.src = `songs/${songIndex+1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove('fa-play-circle');
  masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', () => {
  if (songIndex <= 0) {
      songIndex = 0
  } else {
      songIndex -= 1;
  }
  audioElement.src = `songs/${songIndex+1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove('fa-play-circle');
  masterPlay.classList.add('fa-pause-circle');
})


