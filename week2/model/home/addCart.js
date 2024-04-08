const item = document.querySelectorAll(".card");

function handleAddCart(e, category, imgUrl) {
  const ok = confirm("장바구니에 추가하시겠습니까 ?"); // confirm 텍스트 보여주기

  if (!ok) return;

  const [img, like, title, value] = e.currentTarget.children; // card 요소의 자식 요소 가져오기
  const list = JSON.parse(localStorage.getItem("list")) ?? [];

  let convertedValue = "";

  const tmp = value.innerText.replace("원", ""); // "원" 제거

  tmp
    .split("")
    .reverse()
    .forEach((char, idx) => {
      // 가격 배열을 거꾸로 순회하며 3번째마다 "," 추가
      if (idx % 3 === 0 && idx !== 0) {
        convertedValue += "," + char;
        return;
      }
      convertedValue += char;
    });

  convertedValue = convertedValue.split("").reverse().join(""); // 다시 순서 바꾸고 join

  list.push({
    id: Date.now(),
    title: title.innerText,
    value: convertedValue,
    category,
    imgUrl,
  });

  localStorage.setItem("list", JSON.stringify(list));
}

item.forEach((card) => {
  const category = card.classList[1];
  const img = card.children[0].getAttribute("src");
  card.addEventListener("click", (e) => handleAddCart(e, category, img));
});
