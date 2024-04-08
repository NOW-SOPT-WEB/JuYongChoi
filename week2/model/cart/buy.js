import { formatValue } from "../../utils/format.js";

const buybtn = document.getElementById("buy-btn");
const buyConfirmBtn = document.getElementById("buy-confirm-btn");

const modal = document.getElementById("buy-modal");
const modalList = document.querySelector("#buy-modal ul");
const exitModalBtn = document.getElementById("exit-buy-modal");
const totalAmount = document.getElementById("total_amount");

function handleBuyBtnClick() {
  modal.style.display = "flex";

  //   const checkList = JSON.parse(localStorage.getItem("checkList"));
  const list = JSON.parse(localStorage.getItem("list"));

  list.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.style.padding = "10px 0px";

    const itemContainer = document.createElement("div");
    itemContainer.style.display = "flex";
    itemContainer.style.justifyContent = "space-between";
    itemContainer.style.alignItems = "center";
    itemContainer.style.gap = "20px";

    const img = document.createElement("img");
    img.src = item.imgUrl;
    img.style.width = "50px";
    img.style.height = "50px";
    img.style.borderRadius = "20px";

    const name = document.createElement("span");
    name.innerText = item.title;

    const value = document.createElement("span");
    value.innerText = item.value + "원";

    itemContainer.appendChild(img);
    itemContainer.appendChild(name);
    itemContainer.appendChild(value);

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
  alert("구매 완료되었습니다 !");

  modal.style.display = "none";
}

buybtn.addEventListener("click", handleBuyBtnClick);
exitModalBtn.addEventListener("click", handleExitClick);
buyConfirmBtn.addEventListener("click", handleBuyConfirm);
