let character = document.querySelector(".character");
let enemy = document.querySelector(".enemy");

let punch = new Audio("sound/punch.mp3");

addEventListener("keydown", (e) => {
  if (e.key === "a" || e.key === "A") {
    character.style.backgroundImage =
      "url('images/punch/skeleton-04_punch_00.png')";
    character.style.animation = "punch 1s steps(10) infinite";
    punch.play();
  }
});

addEventListener("keyup", (e) => {
  if (e.key === "a" || e.key === "A") {
    character.style.animation = "";
  }
});
