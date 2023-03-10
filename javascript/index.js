let spanUp = document.querySelector(".up");
let menuBotton = document.querySelector(".toggle-menu");

let ullinks = document.querySelector(".ullinks");
let lilinks = document.querySelectorAll(".ullinks li");
let upBotton = document.querySelectorAll(".up");
let skills = document.querySelector(".skills");
let progSpan = document.querySelectorAll(".prog span");
let number = document.querySelectorAll(".box .number");
let stats = document.querySelector(".stats");
let started = false;
let dYear = document.querySelector(".dYear");

// open Menu
menuBotton.onclick = function () {
  ullinks.classList.toggle("open");
};
//  Close Menu
document.addEventListener("click", function (e) {
  if (e.target !== menuBotton && e.target !== ullinks && e.target !== lilinks) {
    if (ullinks.classList.contains("open")) {
      ullinks.classList.toggle("open");
    }
  }
});
//  Stop The Propagation On Menu
ullinks.onclick = function (e) {
  e.stopPropagation();
};

// Global function Scroll
function scrolTo(e) {
  e.forEach((e) => {
    e.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}

// trigger
scrolTo(lilinks);
scrolTo(upBotton);

// Function  Add class To any Element  With ScrollY And Add Width To Element And To Starting count
function showAndG(e, scrollnumber, aClass, progres) {
  window.onscroll = () => {
    // Add & Remove class To any Element
    if (window.scrollY >= scrollnumber) {
      e.classList.add(aClass);
    } else {
      e.classList.remove(aClass);
    }
    // Add Width To Element
    if (window.scrollY >= skills.offsetTop) {
      progres.forEach((span) => {
        span.style.width = span.dataset.progres;
      });
    }
    // Count Numbers on Stats
    if (window.scrollY >= stats.offsetTop) {
      if (!started) {
        number.forEach((num) => startCount(num));
      }
      started = true;
    }
  };
}

showAndG(spanUp, 1000, "show", progSpan);

//   Count Numbers on Stats
function startCount(e) {
  let goal = e.dataset.goal;
  let co = setInterval(() => {
    e.textContent++;
    if (e.textContent == goal) {
      clearInterval(co);
    }
  }, 2000 / goal);
}

//  Dynamic Year
let dynamicYearText = document.createTextNode(new Date().getFullYear());
dYear.appendChild(dynamicYearText);
