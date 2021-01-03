const body = document.querySelector("body");
const carrot = document.querySelector(".carrot");
const bug = document.querySelector(".bug");

let carrotCount = 10;

for (let i = 0; i < carrotCount; i++) {
  createCarrot();
  createBug();
}

function createCarrot() {
  const carrotObj = `<div class="carrot"></div>`;
  body.append(carrotObj);
}

function createBug() {
  const bugObj = `<div class="bug"></div>`;
  body.append(bugObj);
}
