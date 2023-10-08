const lightBtn = document.getElementById("btn1");
const modeBtn = document.getElementById("btn2");
const alarmOr24HBtn = document.getElementById("btn3");
const light = document.getElementById("light");
const screen = document.getElementById("screen");
const Ecran = document.getElementById("Ecran");
let twelveHour = true;

function toggleState() {
  twelveHour = !twelveHour;
  // if(twelveHour === true) {
  //   twelveHour = false;
  // } else {
  //   twelveHour = true;
  // }
}

function toggleTimeFormat() {
  alarmOr24HBtn.addEventListener("click", () => {
    toggleState();
    displayTime(twelveHour);
  });
}

toggleTimeFormat();
function getDay() {
  const date = new Date();
  const days = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];

  return days[date.getDay()];
}

const day = getDay();
console.log(day);

function getCurrentDay() {
  const now = new Date();

  return now.getDate();
}

const today = getCurrentDay();
console.log(today);
function toggleScreenColor(){
  Ecran.style.fill="rgba(0,255,0,0.7";
  setTimeout(()=>{
    Ecran.style.fill="#888"; 
  },3000);
}

function activateLight() {
  light.style.opacity = "1";
  setTimeout(() => {
    light.style.opacity = "0";
  }, 3000);
  toggleScreenColor();
}

function watchLight() {
  lightBtn.addEventListener("click", activateLight);
}
watchLight();

function displayTime(use12Hour) {
  const currentDate = new Date();
  let hours = currentDate.getHours();
  let minutes = currentDate.getMinutes();
  let seconds = currentDate.getSeconds();

  let ampm = "AM";

  if (use12Hour) {
    ampm = "AM";

    if (hours >= 12) {
      ampm = "PM";
    }

    if (hours > 12) {
      hours -= 12;
    } else if (hours === 0) {
      hours = 12;
    }
  }
  
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  
  let time = "";

  if (use12Hour) {
  
    time = `<span id="format">${ampm}</span><span id="day-name">${day}</span><span id="day-date">${today}</span><p>${hours}:${minutes}:<small>${seconds}</small></p>`;
  } else {
  
    time = `<span id="format">24H</span><span id="day-name">${day}</span><span id="day-date">${today}</span><p>${hours}:${minutes}:<small>${seconds}</small></p>`;
  }

  
  screen.innerHTML = `${time}`;
}

displayTime(twelveHour);
function updateTime() {
  setInterval(() => {
    displayTime(twelveHour);
  }, 500);
}
updateTime();