window.addEventListener("load", () => {
  const gameField = document.querySelector(".game-field");
  const fieldRect = gameField.getBoundingClientRect();
  let carrotCount = 10;

  initGame();
  addItem("carrot", 5, "../carrot/img/carrot.png");
  addItem("bug", 5, "../carrot/img/bug.png");

  function initGame() {
    console.log(fieldRect);
  }

  function addItem(className, count, imagePath) {
    const x1 = 0;
    const y1 = 0;
    const x2 = fieldRect.width;
    const y2 = fieldRect.height;

    for (let i = 0; i < count; i++) {
      const carrot = document.createElement("img");
      item.setAttribute("class", className);
      item.setAttribute("src", imagePath);
      item.style.postion = "absolute";
    }
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
