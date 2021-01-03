const items = document.querySelector(".items");
const input = document.querySelector(".footer-input");
const addbutton = document.querySelector(".footer-button");

function onAdd() {
  // 1. 사용자가 입력한 텍스트를 받아옴
  const text = input.value;

  // 2. 새로운 아이템을 만든다 ( 텍스트 + 삭제 버튼 )
  //const imte = createItem();
  // 3. items 컨테이너안에 새로 만든 아에팀을 추가한다
  //items.appendChild(item);
  // 4. 인풋을 초기화 한다.
  input.value = "";
  input.focus();
}

addbutton.addEventListener("click", () => {
  onAdd();
});
