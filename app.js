let character = document.querySelector(".character");

let translate = 0;

addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    translate++; // Aumentar el valor de translate
    character.style.backgroundImage = "url('Walk.png')";
    character.style.transform = `scale(6) translateX(${translate}px)`; // Usar template literal correctamente
    character.style.animation = "move 1s steps(6) infinite";
    console.log("ArrowRight pressed");
  }
  if (e.key === "ArrowLeft") {
    console.log("ArrowLeft pressed");
    character.style.backgroundImage = "url('Walk.png')";
    translate--; // Disminuir el valor de translate
    character.style.transform = `scale(6) translateX(${translate}px) rotateY(180deg)`; // Usar template literal correctamente
    character.style.animation = "move 1s steps(6) infinite";
  }
});

addEventListener("keyup", (e) => {
  if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
    character.style.backgroundImage = "url('Idle.png')";
  }
});

addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") {
    console.log("Attack pressed");
    character.style.backgroundImage = "url('Attack.png')";
    character.style.transform = "scale(6)";
    character.style.animation = "attack 1s steps(6) infinite";
  }
});

addEventListener("keyup", (e) => {
  if (e.key === "ArrowUp") {
    character.style.backgroundImage = "url('Idle.png')";
  }
});
