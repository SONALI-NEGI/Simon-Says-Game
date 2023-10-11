let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;
let colorBtns = ["yellow", "red", "purple", "green"];

let startBtn = document.querySelector(".start-btn");
let levelBtn = document.querySelector(".level-btn");
let h3 = document.querySelector("h3");

// to start game
startBtn.addEventListener("click", function () {
  if (started == false) {
    console.log("game is started");
    started = true;
    levelUp();
    startBtn.innerText = "Quit";
    startBtn.style.backgroundColor = "red";
  } else {
    startBtn.style.backgroundColor = "green";
    startBtn.innerText = "Start";
    quitReset();
  }
});
// btn flash
function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}
// user flash
function userFlash(btn) {
  btn.classList.add("userFlash");
  setTimeout(function () {
    btn.classList.remove("userFlash");
  }, 250);
}
// level up
function levelUp() {
  userSeq = [];
  level++;
  levelBtn.innerText = `Level : ${level}`;
  // random btn choose
  let randomIdx = Math.floor(Math.random() * 3);
  let randomcolor = colorBtns[randomIdx];
  let randomBtn = document.querySelector(`.${randomcolor}`);
  // console.log
  // console.log(randomIdx);
  // console.log(randomcolor);
  // console.log(randomBtn);
  // pushing random color in game sequence
  gameSeq.push(randomcolor);
  console.log(gameSeq);
  //calling function
  gameFlash(randomBtn);
}

// check sequence
function checkAns(idx) {
  // console.log("current level : -", level);
  // let idx = level - 1;

  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
      // levelUp()
    }
  } else {
    h3.innerHTML = `Game over! Your score was <b>${level}</b>.`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 150);

    // highest score
    let highScore = document.querySelector(".highscore");
    let currentLevel = 0;
    if (currentLevel >= level) {
      highScore.innerText = `Your High Score is ${currentLevel}.`;
    } else {
      highScore.innerText = `Your High Score is ${level}.`;
      currentLevel = level;
    }
    reset();
  }
}

// btn press
function btnPress() {
  // console.log(this);
  let btn = this;
  userFlash(btn);
  userColor = btn.getAttribute("id");
  userSeq.push(userColor);
  checkAns(userSeq.length - 1);
}
let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

// reset function
function reset() {
  started = false;
  userSeq = [];
  gameSeq = [];
  level = 0;
  startBtn.innerText = "Start";
  levelBtn.innerText = ``;
}
// Quit reset function
function quitReset() {
  started = false;
  userSeq = [];
  gameSeq = [];
  level = 0;
  startBtn.innerText = "Start";
  levelBtn.innerText = ``;
}
