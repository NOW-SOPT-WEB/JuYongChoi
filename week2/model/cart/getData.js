const list = JSON.parse(localStorage.getItem("list"));
const table = document.querySelector(".cart_table");

list.forEach((item) => {
  const { id, title, value, category, imgUrl } = item;

  const tr = document.createElement("tr");

  const checkBoxTd = document.createElement("td");
  const checkBox = document.createElement("input");
  checkBox.classList.add("item_check");
  checkBox.type = "checkbox";
  checkBoxTd.appendChild(checkBox);

  const imgTd = document.createElement("td");
  const img = document.createElement("img");
  img.src = imgUrl;
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
  btn.classList.add("cart_delete_btn");
  btnTd.appendChild(btn);

  tr.appendChild(checkBoxTd);
  tr.appendChild(imgTd);
  tr.appendChild(titleTd);
  tr.appendChild(valueTd);
  tr.appendChild(categoryTd);
  tr.appendChild(btnTd);

  table.appendChild(tr);
});
