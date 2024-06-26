import { formatValue } from "../../utils/format.js";
import { GUIDE_MESSAGE } from "../../constants/index.js";

const buybtn = document.getElementById("buy-btn");
const buyConfirmBtn = document.getElementById("buy-modal_confirm-btn");

const modal = document.getElementById("buy-modal");
const modalList = document.querySelector("#buy-modal ul");
const exitModalBtn = document.getElementById("buy-modal_exit-btn");
const totalAmount = document.getElementById("total_amount");

function handleBuyBtnClick() {
  modal.style.display = "flex";

  const checkList = JSON.parse(localStorage.getItem("checkList"));
  // const list = JSON.parse(localStorage.getItem("list"));

  checkList.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.style.padding = "10px 0px";

    const itemContainer = document.createElement("div");
    itemContainer.classList.add("buy-modal_item-container");

    const img = document.createElement("img");
    img.src = item.imgUrl;
    img.alt = "상품 이미지";
    img.classList.add("buy-modal_item-img");

    const name = document.createElement("span");
    name.innerText = item.title;

    const value = document.createElement("span");
    value.innerText = item.value + "원";

    itemContainer.append(img, name, value);
    listItem.appendChild(itemContainer);
    modalList.appendChild(listItem);
  });

  const sum = checkList.reduce(
    (acc, cur) => acc + +cur.value.replaceAll(",", ""),
    0
  );
  totalAmount.innerText = `총 금액: ${formatValue(sum.toString())} 원`;
}

function handleExitClick() {
  modal.style.display = "none";

  modalList.innerHTML = "";
}

function handleBuyConfirm() {
  const list = JSON.parse(localStorage.getItem("list"));
  const checkList = JSON.parse(localStorage.getItem("checkList"));

  const result = list.filter(
    (item) => !checkList.some((checkItem) => checkItem.id === item.id)
  );

  alert(GUIDE_MESSAGE.COMPLETE_BUY_ALERT);

  localStorage.setItem("list", JSON.stringify(result));
  localStorage.setItem("checkList", JSON.stringify([]));

  modal.style.display = "none";
  modalList.innerHTML = "";

  window.location.reload();
}

buybtn.addEventListener("click", handleBuyBtnClick);
exitModalBtn.addEventListener("click", handleExitClick);
buyConfirmBtn.addEventListener("click", handleBuyConfirm);
