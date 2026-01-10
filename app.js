let gameSeq = [];
let userSeq = [];
let colors = ["one", "two", "three", "four"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("Game Started");
        started = true;
        levelUp();
    }
})

function gameFlash(box) {
    box.classList.add("flash");
    setTimeout(function () {
        box.classList.remove("flash")
    }, 250);
}

function userFlash(box) {
    box.classList.add("userFlash");
    setTimeout(function () {
        box.classList.remove("userFlash")
    }, 250);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * colors.length);
    let randColor = colors[randIdx];
    let randBox = document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBox);
}

function checkAns(idx) {

    if (gameSeq[idx] === userSeq[idx]) {
        if (gameSeq.length == userSeq.length) {
            setTimeout(levelUp, 1000);
        }
    }
    else {
        h2.innerHTML = `Game Over !! your Score was <b>${level}</b>  <br> Press any key to start again`;

        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 250);

        reset();
    }
}

let allBoxes = document.querySelectorAll(".box");
for (box of allBoxes) {
    box.addEventListener("click", function () {
        console.log(this);
        let box = this;
        userFlash(box);
        let userColor = box.getAttribute("id");
        userSeq.push(userColor);
        console.log(userSeq);

        checkAns(userSeq.length - 1);
    })
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}

