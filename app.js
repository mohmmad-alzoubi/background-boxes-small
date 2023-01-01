const btn = document.querySelector(".btn");
const boxesContainer = document.querySelector(".boxes");

function createBoxes() {
  for (let a = 0; a < 4; a++) {
    for (let i = 0; i < 4; i++) {
      const box = document.createElement("div");
      box.classList.add("box");
      box.style.cssText = `background-position: ${-i * 125}px ${-a * 125}px`;
      boxesContainer.appendChild(box);
    }
  }
}

createBoxes();

async function magicEffect() {
  const boxes = document.querySelectorAll(".box");
  boxesContainer.classList.toggle("active");
  boxes.forEach((box) => {
    box.classList.toggle("active");
  });
}

btn.addEventListener("click", magicEffect);
