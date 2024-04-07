const item = document.querySelectorAll(".card");

function handleAddCart(e) {
  const ok = confirm("장바구니에 추가하시겠습니까 ?");

  if (!ok) return;

  const [img, like, title, value] = e.currentTarget.children;
  const list = JSON.parse(localStorage.getItem("list")) ?? [];

  const count = list.length;

  list.push({
    id: count + 1,
    title: title.innerText,
    value: value.innerText,
  });

  localStorage.setItem("list", JSON.stringify(list));
}

item.forEach((card) => {
  card.addEventListener("click", (e) => handleAddCart(e));
});
