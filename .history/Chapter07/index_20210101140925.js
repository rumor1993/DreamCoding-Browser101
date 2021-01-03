const body = document.querySelector("body");
let carrotCount = 10;

for (let i = 0; i < carrotCount; i++) {
  createCarrot();
  createBug();
}

function createCarrot() {
  const carrot = document.createElement("div");
  carrotObj;
  body.innerHTML = carrotObj;
}

function createBug() {
  const bug = document.querySelector(".bug");
  const bugObj = `<div class="bug"></div>`;
  body.innerHTML = bugObj;
}
