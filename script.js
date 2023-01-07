//username
var url = new URL(window.location.href);
var username = url.searchParams.get("username");
document.getElementById("welcome-name").innerHTML = document.getElementById("profile-name").innerHTML = document.getElementById("personal-information-name").innerHTML = username;

//countdown
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