let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let lapCounter = 1;

const display = document.getElementById("display");
const startBtn = document.getElementById("start-btn");
const pauseBtn = document.getElementById("pause-btn");
const lapBtn = document.getElementById("lap-btn");
const resetBtn = document.getElementById("reset-btn");
const lapsList = document.getElementById("laps-list");

function timeToString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);

    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);

    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);

    let diffInMs = (diffInSec - ss) * 100;
    let ms = Math.floor(diffInMs);

    let formattedHH = hh.toString().padStart(2, "0");
    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");
    let formattedMS = ms.toString().padStart(2, "0");

   
    return `${formattedHH}:${formattedMM}:${formattedSS}.<span class="ms">${formattedMS}</span>`;
}

function start() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime() {
        elapsedTime = Date.now() - startTime;
        display.innerHTML = timeToString(elapsedTime);
    }, 10);

    startBtn.disabled = true;
    pauseBtn.disabled = false;
    lapBtn.disabled = false;
}

function pause() {
    clearInterval(timerInterval);
    startBtn.disabled = false;
    pauseBtn.disabled = true;
    lapBtn.disabled = true;
}

function reset() {
    clearInterval(timerInterval);
    
    display.innerHTML = '00:00:00.<span class="ms">00</span>';
    elapsedTime = 0;
    lapCounter = 1;
    lapsList.innerHTML = "";
    
    startBtn.disabled = false;
    pauseBtn.disabled = true;
    lapBtn.disabled = true;
}

function lap() {
    const li = document.createElement("li");
    li.innerHTML = `<span>Lap ${lapCounter}</span> ${display.innerHTML}`;
    lapsList.appendChild(li);
    lapCounter++;
    
    const lapsSection = document.querySelector('.laps-section');
    if (lapsSection) {
        lapsSection.scrollTop = lapsSection.scrollHeight;
    }
}

startBtn.addEventListener("click", start);
pauseBtn.addEventListener("click", pause);
resetBtn.addEventListener("click", reset);
lapBtn.addEventListener("click", lap);