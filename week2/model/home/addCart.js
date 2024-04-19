import { formatValue } from "../../utils/format.js";

export function handleAddCart(e, category, imgUrl) {
  const ok = confirm("장바구니에 추가하시겠습니까 ?"); // confirm 텍스트 보여주기

  if (!ok) return;

  const id = e.currentTarget.getAttribute("id");
  const [img, like, title, value] = e.currentTarget.children; // card 요소의 자식 요소 가져오기
  const list = JSON.parse(localStorage.getItem("list")) ?? [];

  if (list.some((item) => item.id === id)) {
    // 이미 장바구니에 있는 item이면 alert 후 리턴
    alert("이미 장바구니에 존재합니다 !");
    return;
  }

  let convertedValue = "";

  const tmp = value.innerText.replace("원", ""); // "원" 제거

  convertedValue = formatValue(tmp);

  list.push({
    id,
    title: title.innerText,
    value: convertedValue,
    category,
    imgUrl,
  });

  localStorage.setItem("list", JSON.stringify(list));
}
