const items = document.querySelector(".items");
const input = document.querySelector(".footer-input");
const addbutton = document.querySelector(".footer-button");

console.log(items);
console.log(input);
console.log(addbutton);

function onAdd() {
  // 1. 사용자가 입력한 텍스트를 받아옴
  const text = input.value;
  // 2. 새로운 아이템을 만든다 ( 텍스트 + 삭제 버튼 )
  const imte = createItem();
  // 3. items 컨테이너안에 새로 만든 아에팀을 추가한다
  items.appendChild(item);
  // 4. 인풋을 초기화 한다.
  input.value = "";
  input.focus();
}

function createItem(text) {
  const itemRow = document.createElement("li");
  itemRow.setAttribute("class", "item-row");

  const span = document.createElement("span");
  span.setAttribute("class", "item-name");
  span.innerText = text;

  const deleteButton = document.createElement("button");
  deleteButton.setAttribute("class", "itme-delete");
  deleteButton.innerHTML = `<i class="fas fa-trash-alt"></i>`;
  deleteButton.addEventListener("click", () => {
    items.removeChild(itemRow);
  });

  const itmeDivider = document.createElement("div");
  itmeDivider.setAttribute("class", "item-row");

  item.appendChild(name);
  item.appendChild(deleteButton);
}

addbutton.addEventListener("click", () => {
  onAdd();
});
