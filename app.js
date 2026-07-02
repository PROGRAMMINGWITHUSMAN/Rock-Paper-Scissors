let btns = document.querySelectorAll(".impbtn");
let leftImg = document.querySelector(".leftimg");
let rightImg = document.querySelector(".right");
let p = document.querySelector(".winning-title");
let leftScore = document.querySelector(".Left-Score")
let rightScore = document.querySelector(".Right-Score")
let reset = document.querySelector("#res")

computerScore = 0
yourScore = 0 

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", () => {
    let random = Math.floor(Math.random() * 3);
    if (random === 0) {
      rightImg.src = "assets/img/Right-1.png";
    } else if (random === 1) {
      rightImg.src = "assets/img/Right-2.png";
    } else if (random === 2) {
      rightImg.src = "assets/img/Right-3.png";
    }

    if (btns[i].innerText === "ROCK") {
      leftImg.src = "assets/img/Left-1.png";
    } else if (btns[i].innerText === "PAPER") {
      leftImg.src = "assets/img/Left-2.png";
    } else if (btns[i].innerText === "SCISSORS") {
      leftImg.src = "assets/img/Left-3.png";
    }

    // Checking Starts from here:

    if (btns[i].innerText === "ROCK" && random === 0) {
      p.innerText = "MATCH DRAW!";
    } else if (btns[i].innerText === "PAPER" && random === 1) {
      p.innerText = "MATCH DRAW!";
    } else if (btns[i].innerText === "SCISSORS" && random === 2) {
      p.innerText = "MATCH DRAW!";
    }

    if (btns[i].innerText === "ROCK" && random === 1) {
      p.innerText = "COMPUTER WON!";
      computerScore++
    } else if (btns[i].innerText === "ROCK" && random === 2) {
      p.innerText = "YOU WON!";
      yourScore++
    } 
    
    if (btns[i].innerText === "PAPER" && random === 0) {
      p.innerText = "YOU WON!";
      yourScore++
    } else if (btns[i].innerText === "PAPER" && random === 2) {
      p.innerText = "COMPUTER WON!";
      computerScore++
    }

    if (btns[i].innerText === "SCISSORS" && random === 0) {
      p.innerText = "COMPUTER WON!";
      computerScore++
    } else if (btns[i].innerText === "SCISSORS" && random === 1) {
      p.innerText = "YOU WON!";
      yourScore++
    }

    leftScore.innerText = `PLAYER SCORE: ${yourScore}`
    rightScore.innerText = `COMPUTER SCORE: ${computerScore}`
});   
}

reset.addEventListener("click", () => {
    yourScore = 0
    computerScore = 0

    leftScore.innerText = `PLAYER SCORE: ${yourScore}`
    rightScore.innerText = `COMPUTER SCORE: ${computerScore}`

    leftImg.src = "assets/img/Left-1.png"
    rightImg.src = "assets/img/Right-1.png"

    p.innerText = ""
})