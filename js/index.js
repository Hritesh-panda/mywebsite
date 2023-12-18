var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },
});

// header make sticky

window.addEventListener("scroll", function () {
  let head_section = document.querySelector(".head-section");
  head_section.classList.toggle("sticky", window.scrollY > 0);
});

//why you choose slider2 usiing js

// let img_wrapper = document.querySelector(".img-wrapper");
// let img_item = document.querySelectorAll(".image-wrapper > *");
// let img_length = img_item.length;
// let totalscroll = 0;
// const perView = 3;

// img_wrapper.style.setProperty("--per-view", perView);
// for (let i = 0; i < perView; i++) {
//   img_wrapper.insertAdjacentHTML("beforeend", img_item[i]);
// }
// const autoScroll = setInterval(scrolling, 1000);
// function scrolling() {
//   totalscroll++;
//   // if(totalscroll == )
//   const widthEl =
//     document.querySelector(".img-wrapper > :first-child").offsetWidth + 24;
//   img_wrapper.style.left = `-${totalscroll * widthEl}px`;
// }

// swipper 2
var swiper = new Swiper(".mySwiper2", {
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
  centeredSlides: true,
  spaceBetween: 30,
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

// circular progress in experience

let circularprogress = document.querySelector(".circular-progress");
let progrssvalue = document.querySelector(".progress-value");

let progressStartvalue = 0,
  progressEndvalue = 92,
  progressSpeed = 50;

let progress = setInterval(() => {
  progressStartvalue++;
  progrssvalue.textContent = `${progressStartvalue}%`;

  circularprogress.style.background = `conic-gradient(#556fff,
    #556fff,
    #e05fc4,
    #f767a6,
    #ff798e ,${progressStartvalue * 3.6}deg, #fff 0deg)`;
  if (progressStartvalue == progressEndvalue) {
    clearInterval(progress);
  }
  // console.log(progressStartvalue);
}, progressSpeed);

//  progress circle2 in Exerience

let circular_progess = document.querySelector(".circular-progress2");
let progess_value = document.querySelector(".progress-value2");

let progressStart = 0,
  progressEnd = 90,
  Speed = 50;

let progress_circle = setInterval(() => {
  progressStart++;
  progess_value.textContent = `${progressStart}%`;
  circular_progess.style.background = `conic-gradient(#556fff,
    #556fff,
    #e05fc4,
    #f767a6,
    #ff798e ,${progressStart * 3.6}deg, #fff 0deg)`;
  if (progressStart == progressEnd) {
    clearInterval(progress_circle);
  }
  // console.log(progressStart);
}, Speed);

// planning page

// let tabheader = document.getElementsByClassName("tab-header")[0];
// let tabindecator = document.getElementById("tab-indicator")[0];
// let tabbody = document.getElementsByClassName("tab-body")[0];
// let tbancor = tabheader.getElementsByTagName("div");
// for (let i = 0; i < tbancor.length; i++) {
//   tbancor[i].addEventListener("click", function () {
//     tabheader.getElementsByClassName("active")[0].classList.remove("active");
//     tbancor[i].classList.add("active");
//     tabbody.getElementsByClassName("active")[0].classList.remove("active");
//     tabbody.getElelmentsByTagName("div")[i].classList.add("active");
//   });
// }

// increament number
let increasevalue = document.querySelectorAll(".cell");
let interval = 2000;
increasevalue.forEach((increasevalue) => {
  let startval = 1000;
  let endval = parseInt(increasevalue.getAttribute("data-val"));
  // console.log(endval);
  let duration = Math.floor(interval / endval);
  let counter = setInterval(function () {
    startval += 1;
    increasevalue.textContent = startval;
    if (startval == endval) {
      clearInterval(counter);
    }
  }, duration);
});
