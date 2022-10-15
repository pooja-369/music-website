// header scrolling 

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
  let audioElement = new Audio('./song/1.mp3');
  audioElement.play();
  let masterPlay = document.getElementById('masterPlay');
  let myProgressBar = document.getElementById('myProgressBar');
  let gif = document.getElementById('gif');
  let masterSongName = document.getElementById('masterSongName');
  let songItems = Array.from(document.getElementsByClassName('card-content'));