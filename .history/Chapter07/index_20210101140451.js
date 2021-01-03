const body = document.querySelector("body");
const carrot = document.querySelector(".carrot");
const bug = document.querySelector(".bug");

let carrotCount = 10;

function createCarrot() {
  const carrotObj = `<div class="carrot"></div>`;
  body.appendChild(carrotObj);
}

function createBug() {
  const bugObj = `<div class="bug"></div>`;
  body.appendChild(bugObj);
}
