//popup-menu on mobile version
const hamburgerMenu = document.querySelector(".hamburger-menu");
const popupMenu = document.querySelector(".popup-menu");
hamburgerMenu.addEventListener("click", () => {
  if (popupMenu.style.display === "none") {
    popupMenu.style.display = "block";
  } else {
    popupMenu.style.display = "none";
  }
});

//popup sections on mobile version
const icon = document.querySelector(".profile-icon");
const homeworkSection = document.querySelector(".homework-section-container-popup");
const testsSection = document.querySelector(".tests-section-container-popup");
icon.addEventListener("click", () => {
  homeworkSection.classList.toggle("visible");
  testsSection.classList.toggle("visible");
  homeworkSection.style.position = testsSection.style.position = "absolute";
  homeworkSection.style.top ="52px";
  testsSection.style.top = "265px";
  homeworkSection.style.width = testsSection.style.width = "100%"; 
});

//holidays countdown
var holidaysDate = new Date("Feb 13, 2023 00:00:00");
var holidaysCountdown = setInterval(()=> {
  var currentTime = new Date();
  var difference = holidaysDate - currentTime;
  var days = Math.floor(difference / (1000 * 60 * 60 * 24));
  var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  document.getElementById("holidays-countdown").innerHTML = days + "d " + hours + "h " + minutes + "m ";
  if (difference < 0) {
    clearInterval(holidaysCountdown);
    document.getElementById("holidays-countdown").innerHTML = "Still holidays";
  }
}, 1000);

//get username and update title
var url = new URL(window.location.href);
var username = url.searchParams.get("username");
document.getElementById("welcome-name").innerHTML = document.getElementById("profile-name").innerHTML = document.getElementById("personal-information-name").innerHTML = username;