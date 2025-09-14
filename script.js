document.addEventListener("DOMContentLoaded", () => {
  const box = document.getElementsByClassName("box");
  const outDiv = document.getElementsByClassName("outDiv");
  const btn = document.getElementById("resetBtn");
  const head = document.getElementById("heading");
  const winDisplay = document.getElementById("winCount");
  const resetCount = document.getElementById("resetCountBtn");
  const shareBtn = document.getElementById("shareBtn");

  let entryValue = "X";
  let count = 0;
  let winX = 0;
  let winY = 0;
  let drawCount = 0;
  winDisplay.innerText = `Start the Game`;

  let winningStreak = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  // Entering the values
  function entry(e) {
    //console.log(e.target);
    if (e.target.className == "outDiv") {
      pass;
    }
    if (e.target.innerText == "") {
      count++;
      if (count >= 9) {
        draw();
      }
      if (entryValue == "X") {
        e.target.innerText = entryValue;
        entryValue = "O";
      } else {
        e.target.innerText = entryValue;
        entryValue = "X";
      }
      win();
    }
  }
  outDiv[0].addEventListener("click", entry);

  // Winning Check
  function win() {
    winningStreak.forEach((e) => {
      // X winning condition
      if (
        box[e[0]].innerText == box[e[1]].innerText &&
        box[e[1]].innerText == box[e[2]].innerText &&
        box[e[2]].innerText == "X"
      ) {
        box[e[0]].classList.add("winBlocks");
        box[e[1]].classList.add("winBlocks");
        box[e[2]].classList.add("winBlocks");
        head.innerText = "X won";
        winX++;
        outDiv[0].removeEventListener("click", entry);
        count = 0;
      }

      // O winning condition
      if (
        box[e[0]].innerText == box[e[1]].innerText &&
        box[e[1]].innerText == box[e[2]].innerText &&
        box[e[2]].innerText == "O"
      ) {
        box[e[0]].classList.add("winBlocks");
        box[e[1]].classList.add("winBlocks");
        box[e[2]].classList.add("winBlocks");
        head.innerText = "O won";
        winY++;
        outDiv[0].removeEventListener("click", entry);
        count = 0;
      }
      winDisplay.innerText = `X : ${winX} won | O : ${winY} won\nDraw : ${drawCount}`;
    });
  }

  //   Draw function
  function draw() {
    head.innerText = "Match Drawn";
    count = 0;
    drawCount++;
  }

  // Reset function
  btn.addEventListener("click", () => {
    for (let i = 0; i < 9; i++) {
      box[i].innerText = "";
      box[i].classList.remove("winBlocks");
    }
    head.innerText = "Tic Tac Toe";
    entryValue = "X";
    outDiv[0].addEventListener("click", entry);
  });

  //   Reset Count function
  resetCount.addEventListener("click", () => {
    winX = 0;
    winY = 0;
    drawCount = 0;
    winDisplay.innerText = `X : ${winX} won | O : ${winY} won\nDraw : ${drawCount}`;
  });

  // Share
  shareBtn.addEventListener("click", () => {
    window.print();
  });
});
