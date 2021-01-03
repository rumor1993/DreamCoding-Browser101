const body = document.querySelector("body");
let carrotCount = 10;

for (let i = 0; i < carrotCount; i++) {
  createCarrot();
  createBug();
}

function createCarrot() {
  const carrot = document.createElement("div");
  carrot.setAttribute("class", "carrot");
  body.innerHTML = carrotObj;
}

function createBug() {
  const bug = document.createElement("div");
  carrot.setAttribute("class", "bug");
  body.innerHTML = bugObj;
}
