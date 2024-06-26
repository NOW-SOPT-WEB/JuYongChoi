const list = JSON.parse(localStorage.getItem("list"));
const checkList = JSON.parse(localStorage.getItem("checkList"));

const table = document.querySelector(".cart_table");

list.forEach((item) => {
  const { id, title, value, category, imgUrl } = item;

  const tr = document.createElement("tr");
  tr.setAttribute("id", id);

  const checkBoxTd = document.createElement("td");
  const checkBox = document.createElement("input");

  if (checkList?.some((item) => item.id === Number(id)))
    checkBox.checked = true; // check가 되어있던 item이면 checked 상태로

  checkBox.classList.add("check_item");
  checkBox.type = "checkbox";
  checkBoxTd.appendChild(checkBox);

  const imgTd = document.createElement("td");
  const img = document.createElement("img");
  img.src = imgUrl;
  img.alt = "장바구니 아이템 이미지";
  img.classList.add("item_img");
  imgTd.appendChild(img);

  const valueTd = document.createElement("td");
  valueTd.innerText = value + "원";

  const titleTd = document.createElement("td");
  titleTd.innerText = title;

  const categoryTd = document.createElement("td");
  categoryTd.innerText = category;

  const btnTd = document.createElement("td");
  const btn = document.createElement("button");
  btn.innerText = "삭제";
  btn.classList.add(`cart_delete_btn${id}`);
  btn.classList.add("small-btn");
  btnTd.appendChild(btn);

  tr.append(checkBoxTd, imgTd, titleTd, valueTd, categoryTd, btnTd);

  table.appendChild(tr);
});
