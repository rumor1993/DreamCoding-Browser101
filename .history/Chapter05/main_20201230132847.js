const items = document.querySelector(".items");
const input = document.querySelector(".footer-input");
const addbutton = document.querySelector(".footer-button");

function onAdd() {
  // 1. 사용자가 입력한 텍스트를 받아옴
  // 2. 새로운 아이템을 만든다 ( 텍스트 + 삭제 버튼 )
  // 3. items 컨테이너안에 새로 만든 아에팀을 추가한다
  // 4. 새로 추가된 아이템으로 스크롤링
  // 5. 인풋을 초기화 한다.

  const text = input.value;
  if (text === "") {
    input.focus();
    return;
  }
  const item = createItem(text);
  items.appendChild(item);
  item.scrollIntoView({ block: "center" });
  input.value = "";
}

function createItem(text) {
  const itemRow = document.createElement("li");
  itemRow.setAttribute("class", "item-row");

  const item = document.createElement("div");
  item.setAttribute("class", "item");

  const name = document.createElement("span");
  name.setAttribute("class", "item-name");
  name.innerText = text;

  const deleteButton = document.createElement("button");
  deleteButton.setAttribute("class", "item-delete");
  deleteButton.innerHTML = `<i class="fas fa-trash-alt"></i>`;
  deleteButton.addEventListener("click", () => {
    items.removeChild(itemRow);
  });

  const itmeDivider = document.createElement("div");
  itmeDivider.setAttribute("class", "item-divider");

  item.appendChild(name);
  item.appendChild(deleteButton);

  itemRow.appendChild(item);
  itemRow.appendChild(itmeDivider);
  return itemRow;
}

addbutton.addEventListener("click", () => {
  onAdd();
});

input.addEventListener("keypress", (event) => {
  if (event.key == "Enter") {
    onAdd();
  }
});
