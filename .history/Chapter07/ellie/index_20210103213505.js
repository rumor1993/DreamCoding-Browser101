window.addEventListener("load", () => {
  const gameField = document.querySelector(".game-field");
  const fieldRect = gameField.getBoundingClientRect();
  let carrotCount = 10;

  for (let i = 0; i < carrotCount; i++) {
    createCarrot();
    createBug();
  }

  initGame();
  addItem("carrot", 5, "../carrot/img/carrot.png");
  addItem("bug", 5, "../carrot/img/bug.png");

  function initGame() {
    console.log(fieldRect);
  }

  function addItem(className, count, imagePath) {}

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
