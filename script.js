function buttonOne() {
  document.querySelector(".canvas_one").style.display = "block";
  document.querySelector(".canvas_two").style.display = "none";
  document.querySelector(".canvas_three").style.display = "none";
}

function buttonTwo() {
  document.querySelector(".canvas_one").style.display = "none";
  document.querySelector(".canvas_three").style.display = "none";
  document.querySelector(".canvas_two").style.display = "block";
}

function buttonThree() {
  document.querySelector(".canvas_one").style.display = "none";
  document.querySelector(".canvas_two").style.display = "none";
  document.querySelector(".canvas_three").style.display = "block";
}

function popUp(n) {
  if (n == 1) {
    confirm("You clicked the flower");
  } else if (n == 2) {
    confirm("You clicked the Map");
  }
}
