/* ----------- arquivos do portfolio Navbar ----------- */
// let mixer = mixitup('.gallery', { 
//   selectors: {
//     target: '.card'
//   },
//   animation: {
//     duration: 500,
//   },
// }); 
const filterButtons = document.querySelectorAll(".btns button")
const filterableCards = document.querySelectorAll(".gallery .card")

// define the filterCards function
const filterCards = e =>{
  document.querySelector(".active").classList.remove("active");
  e.target.classList.add("active");

  //iterate over each filternable card
  filterableCards.forEach(card => {
    //Add "hide"  class to hide the card initially
    card.classList.add("hide");
    //check if the card matches the selected filter or "all" Is selected
    if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
      console.log("ai dento")
      card.classList.remove("hide");
    }
  });
};

//add click event listerner to each filter  button
filterButtons.forEach(button => button.addEventListener("click", filterCards));

// swiper
var swiper7 = new Swiper(".img-1", {
    grabCursor: true,
    speed: 900,
    loop: true,
    mousewheel: {
      invert: false,
    },
    pagination: {
      el: '.swiper-pagination-1',
      clickable: true,
    },
    navigation: {
        nextEl: "#button-next-1",
        prevEl: "#button-prev-1",
    },
});
var swiper8 = new Swiper(".img-2", {
    grabCursor: true,
    speed: 900,
    loop: true,
    mousewheel: {
      invert: false,
    },
    pagination: {
      el: '.swiper-pagination-2',
      clickable: true,
    },
    navigation: {
      nextEl: "#button-next-2",
      prevEl: "#button-prev-2",
  },
});
var swiper9 = new Swiper(".img-3", {
    grabCursor: true,
    speed: 900,
    loop: true,
    mousewheel: {
      invert: false,
    },
    pagination: {
      el: '.swiper-pagination-3',
      clickable: true,
    },
    navigation: {
        nextEl: "#button-next-3",
        prevEl: "#button-prev-3",
    },
});
var swiper10 = new Swiper(".img-4", {
    grabCursor: true,
    speed: 900,
    loop: true,
    mousewheel: {
      invert: false,
    },
    pagination: {
      el: '.swiper-pagination-4',
      clickable: true,
    },
    navigation: {
      nextEl: "#button-next-4",
      prevEl: "#button-prev-4",
  },
});
var swiper11 = new Swiper(".img-5", {
    grabCursor: true,
    speed: 900,
    loop: true,
    mousewheel: {
      invert: false,
    },
    pagination: {
      el: '.swiper-pagination-5',
      clickable: true,
    },
    navigation: {
        nextEl: "#button-next-5",
        prevEl: "#button-prev-5",
    },
});
var swiper12 = new Swiper(".img-6", {
    grabCursor: true,
    speed: 900,
    loop: true,
    mousewheel: {
      invert: false,
    },
    pagination: {
      el: '.swiper-pagination-6',
      clickable: true,
    },
    navigation: {
        nextEl: "#button-next-6",
        prevEl: "#button-prev-6",
    },
});
var swiper13 = new Swiper(".img-7", {
    grabCursor: true,
    speed: 900,
    loop: true,
    mousewheel: {
      invert: false,
    },
    pagination: {
      el: '.swiper-pagination-7',
      clickable: true,
      },
    navigation: {
        nextEl: "#button-next-7",
        prevEl: "#button-prev-7",
    },
});
var swiper14 = new Swiper(".img-8", {
    grabCursor: true,
    speed: 900,
    loop: true,
    mousewheel: {
      invert: false,
    },
    pagination: {
      el: '.swiper-pagination-8',
      clickable: true,
    },
    navigation: {
        nextEl: "#button-next-8",
        prevEl: "#button-prev-8",
    },
});
var swiper15 = new Swiper(".img-9", {
    grabCursor: true,
    speed: 900,
    loop: true,
    mousewheel: {
      invert: false,
    },
    pagination: {
      el: '.swiper-pagination-9',
      clickable: true,
    },
    navigation: {
        nextEl: "#button-next-9",
        prevEl: "#button-prev-9",
    },
});
var swiper16 = new Swiper(".img-10", {
    grabCursor: true,
    speed: 900,
    loop: true,
    mousewheel: {
      invert: false,
    },
    pagination: {
      el: '.swiper-pagination-10',
      clickable: true,
    },
    navigation: {
        nextEl: "#button-next-10",
        prevEl: "#button-prev-10",
    },
});
var swiper17 = new Swiper(".img-11", {
    grabCursor: true,
    speed: 900,
    loop: true,
    mousewheel: {
      invert: false,
    },
    pagination: {
      el: '.swiper-pagination-11',
      clickable: true,
    },
    navigation: {
        nextEl: "#button-next-11",
        prevEl: "#button-prev-11",
    },
});
var swiper18 = new Swiper(".img-12", {
    grabCursor: true,
    speed: 900,
    loop: true,
    mousewheel: {
      invert: false,
    },
    pagination: {
      el: '.swiper-pagination-12',
      clickable: true,
    },
    navigation: {
        nextEl: "#button-next-12",
        prevEl: "#button-prev-12",
    },
});