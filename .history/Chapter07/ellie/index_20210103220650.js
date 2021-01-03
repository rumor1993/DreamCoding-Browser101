window.addEventListener("load", () => {
  const itemSize = 80;
  const gameField = document.querySelector(".game-field");
  const gamePopup = document.querySelector(".pop-up");
  const fieldRect = gameField.getBoundingClientRect();
  let carrotCount = 10;

  initGame();

  function initGame() {
    addItem("carrot", 5, "../carrot/img/carrot.png");
    addItem("bug", 5, "../carrot/img/bug.png");

    gamePopup.setAttribute("class", "pop-up-hide");
  }

  function addItem(className, count, imagePath) {
    const x1 = 0;
    const y1 = 0;
    const x2 = fieldRect.width - itemSize;
    const y2 = fieldRect.height - itemSize;

    for (let i = 0; i < count; i++) {
      const item = document.createElement("img");
      item.setAttribute("class", className);
      item.setAttribute("src", imagePath);
      item.style.position = "absolute";
      const x = randomNumber(x1, x2);
      const y = randomNumber(y1, y2);
      item.style.left = `${x}px`;
      item.style.top = `${y}px`;
      gameField.appendChild(item);
    }
  }

  function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }

  function startGame() {}
});
