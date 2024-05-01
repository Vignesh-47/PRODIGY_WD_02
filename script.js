const display = document.querySelector('.display');
const startBtn = document.querySelector('.start');
const pauseBtn = document.querySelector('.pause');
const resetBtn = document.querySelector('.reset');
const lapBtn = document.querySelector('.lap');
const lapsList = document.querySelector('.laps');

let startTime;
let elapsedTime = 0;
let timerInterval;

function startTimer() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(updateTime, 10);
}

function updateTime() {
  const elapsedTime = Date.now() - startTime;
  display.textContent = formatTime(elapsedTime);
}

function formatTime(time) {
  const totalSeconds = Math.floor(time / 1000);
  const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
  const seconds = (totalSeconds % 60).toString().padStart(2, '0');
  const milliseconds = Math.floor((time % 1000) / 10).toString().padStart(2, '0');
  return `${minutes}:${seconds}:${milliseconds}`;
}

function pauseTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  clearInterval(timerInterval);
  display.textContent = '00:00:00';
  elapsedTime = 0;
  lapsList.innerHTML = '';
}

function lapTimer() {
  const lapTime = formatTime(Date.now() - startTime);
  const lapItem = document.createElement('li');
  lapItem.textContent = lapTime;
  lapsList.appendChild(lapItem);
}

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);
lapBtn.addEventListener('click', lapTimer);
