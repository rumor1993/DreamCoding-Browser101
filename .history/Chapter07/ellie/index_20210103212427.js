window.addEventListener("load", () => {
  const gameField = document.querySelector("game-field");
  let carrotCount = 10;

  for (let i = 0; i < carrotCount; i++) {
    createCarrot();
    createBug();
  }

  function createCarrot() {
    const carrot = document.createElement("div");
    carrot.setAttribute("class", "carrot");
    gameField.appendChild(carrot);
  }

  function createBug() {
    const bug = document.createElement("div");
    bug.setAttribute("class", "bug");
    gameField.appendChild(bug);
  }
});
