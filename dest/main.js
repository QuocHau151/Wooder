let header = document.querySelector(".header");
let scroll = window.addEventListener("scroll", function (e) {
  if (window.pageYOffset >= 750) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

// let listItemSlider = document.querySelectorAll(".banner-img");
// let number = document.querySelector(".number");
// let dots = document.querySelectorAll(".dot ");
// let currentSlider = 0;
// listItemSlider.forEach(function (itemSlider, index) {
//   if (itemSlider.classList.contains("active")) {
//     currentSlider = index;
//   }
// });
// function showNumber() {
//   number.innerHTML = (currentSlider + 1).toString().padStart(2, "0");
// }

// let nextbtn = document.querySelector(".btn-right");
// nextbtn.addEventListener("click", function () {
//   if (currentSlider < listItemSlider.length - 1) {
//     listItemSlider[currentSlider].classList.remove("active");
//     listItemSlider[currentSlider + 1].classList.add("active");
//     dots[currentSlider].classList.remove("active-dot");
//     dots[currentSlider + 1].classList.add("active-dot");
//     currentSlider++;
//     showNumber(currentSlider + 1);
//   } else {
//     listItemSlider[currentSlider].classList.remove("active");
//     listItemSlider[0].classList.add("active");
//     dots[currentSlider].classList.remove("active-dot");
//     dots[0].classList.add("active-dot");
//     currentSlider = 0;
//     showNumber(currentSlider);
//   }
// });
// let prevbtn = document.querySelector(".btn-left");
// prevbtn.addEventListener("click", function () {
//   if (currentSlider > 0) {
//     listItemSlider[currentSlider].classList.remove("active");
//     listItemSlider[currentSlider - 1].classList.add("active");
//     dots[currentSlider].classList.remove("active-dot");
//     dots[currentSlider - 1].classList.add("active-dot");
//     currentSlider--;
//     showNumber(currentSlider - 1);
//   } else {
//     listItemSlider[currentSlider].classList.remove("active");
//     listItemSlider[listItemSlider.length - 1].classList.add("active");
//     dots[currentSlider].classList.remove("active-dot");
//     dots[listItemSlider.length - 1].classList.add("active-dot");
//     currentSlider = listItemSlider.length - 1;
//     showNumber(currentSlider);
//   }
// });

let nav = document.querySelector(".nav");
let navbtn = document.querySelector(".nav-btn");

navbtn.addEventListener("click", function () {
  nav.classList.toggle("active");
  navbtn.classList.toggle("active");
});
let hidenav = window.addEventListener("resize", function () {
  if (window.innerWidth >= 768) {
    nav.classList.remove("active");
    navbtn.classList.remove("active");
  }
});

let menus = document.querySelectorAll(".menu a");
let heightHeader = document.querySelector(".header").offsetHeight;
let sections = [];

function removeSection() {
  menus.forEach(function (element, index) {
    element.classList.remove("active");
  });
}
menus.forEach(function (element, index) {
  let href = element.getAttribute("href");
  let className = href.replace("#", "");
  let section = document.querySelector("." + className);
  sections.push(section);
  element.addEventListener("click", function (e) {
    e.preventDefault();
    let positsionSection = section.offsetTop;
    window.scrollTo({
      top: positsionSection - heightHeader + 1,
      behavior: "smooth",
    });

    removeSection();
    element.classList.add("active");
  });
});
window.addEventListener("scroll", function () {
  let positsionScroll = window.pageYOffset;
  sections.forEach(function (currentValue, index) {
    if (
      positsionScroll > currentValue.offsetTop - heightHeader &&
      positsionScroll < currentValue.offsetTop + currentValue.offsetHeight
    ) {
      removeSection();
      menus[index].classList.add("active");
    }
  });
});

let lang = document.querySelector(".language");
let lang__current = document.querySelector(".language__current span");
let lang__option = document.querySelector(".language__option");
let lang__item = document.querySelectorAll(".language__option li");

lang.addEventListener("click", function (e) {
  e.stopPropagation();
  lang__option.classList.toggle("active");
});

lang__item.forEach(function (item) {
  item.addEventListener("click", function (e) {
    let itemText = this.innerText;
    let langCurrentSpan = lang__current.innerText;
    lang__current.innerText = itemText;
    this.innerHTML = langCurrentSpan;
  });
});

document.addEventListener("click", function () {
  lang__option.classList.remove("active");
});

let btns = document.querySelectorAll(".btn-list");
let list = document.querySelectorAll(".news__thumbnail");

btns.forEach(function (element, index) {
  element.addEventListener("click", function (e) {
    e.preventDefault();
    btns.forEach(function (tab) {
      tab.classList.remove("active");
    });
    element.classList.add("active");
    list.forEach(function (element) {
      element.classList.remove("active");
    });

    let id = this.dataset.tab;

    document.querySelector(".list-" + id).classList.add("active");
  });
});

let playlist = document.querySelectorAll(".play");
let modalvideo = document.querySelector(".popupvideo");
let iframe = document.querySelector(".popupvideo__inner-iframe iframe");

playlist.forEach(function (element) {
  element.addEventListener("click", function () {
    modalvideo.classList.add("active");

    let idvideo = element.getAttribute("data-src-video");
    iframe.setAttribute("src", `https://www.youtube.com/embed/${idvideo}`);
  });
});
modalvideo.addEventListener("click", function () {
  this.classList.remove("active");
  iframe.setAttribute("src", ``);
});

let backtotop = document.querySelector(".back-top");
let getHeightWindow = window.innerHeight;
document.addEventListener("scroll", function () {
  let scrollY = window.pageYOffset;
  if (scrollY > getHeightWindow) {
    backtotop.classList.add("active");
  } else {
    backtotop.classList.remove("active");
  }
});
backtotop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

function handleBanner() {
  var elem = document.querySelector(".mySlides");
  var flkty = new Flickity(elem, {
    // options
    cellAlign: "left",
    contain: true,
    wrapAround: true,
    pageDots: true,
    on: {
      ready: function () {
        showDots();
      },
      change: function (index) {
        showNumber(index);
        showDots();
      },
    },
  });

  var previousWrappedButton = document.querySelector(".btn-left");
  previousWrappedButton.addEventListener("click", function () {
    flkty.previous(true);
  });
  var previousWrappedButton = document.querySelector(".btn-right");
  previousWrappedButton.addEventListener("click", function () {
    flkty.next(true);
  });
  function showNumber(index) {
    let number = document.querySelector(".number");
    number.textContent = (index + 1).toString().padStart(2, "0");
  }
  function showDots() {
    let dots = document.querySelector(".flickity-page-dots");
    let dotsBotton = document.querySelector(".bottom__left");
    dotsBotton.appendChild(dots);
  }
}
handleBanner();

function slickBottom() {
  var elem = document.querySelector(".slick");
  var flkty = new Flickity(elem, {
    // options
    cellAlign: "center",
    contain: true,
    wrapAround: true,
    freeScroll: true,
    prevNextButtons: false,
    pageDots: false,
    draggable: ">1",
    on: {
      ready: function () {},
      change: function (index) {
        scroolSlider();
      },
    },
  });
  function scroolSlider() {
    var progressBar = document.querySelector(".progress-bar");
    flkty.on("scroll", function (progress) {
      progress = Math.max(0, Math.min(1, progress));
      progressBar.style.width = progress * 100 + "%";
    });
  }
}
slickBottom();

Fancybox.bind('[data-fancybox="image"]', {
  infinite: true,
  keyboard: {
    Escape: "close",
    Delete: "close",
    Backspace: "close",
    PageUp: "next",
    PageDown: "prev",
    ArrowUp: "next",
    ArrowDown: "prev",
    ArrowRight: "next",
    ArrowLeft: "prev",
  },
});
