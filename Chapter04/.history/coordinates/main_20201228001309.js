const vertical = document.querySelector(".vertical");
const horizontal = document.querySelector(".horizontal");
const target = document.querySelector(".target");
const tag = document.querySelector(".tag");

document.addEventListener("mousemove", function (event) {
  const x = event.clientX;
  const y = event.clientY;

  // 성능 개선
  vertical.style.left = `${x}px`;
  horizontal.style.top = `${y}px`;

  vertical.style.transform = `translateX${x}px`;
  horizontal.style.top = `translateT${y}px`;

  target.style.left = `${x}px`;
  target.style.top = `${y}px`;

  tag.style.left = `${x}px`;
  tag.style.top = `${y}px`;
  tag.innerHTML = `${x}px, ${y}px`;
});
