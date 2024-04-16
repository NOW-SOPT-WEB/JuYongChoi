import { SHOPPING_LIST } from "./store.js";

const listItem = document.querySelectorAll(".nav li");
const content = document.getElementById("content-box");
const title = document.getElementById("content-title");
const slider = document.getElementById("slider");

title.innerText = "전체";

SHOPPING_LIST.forEach((item) => {
  /* 메인 컨텐츠 */
  const { id, name, value, category, imgUrl } = item;

  const container = document.createElement("div");
  container.setAttribute("id", id);
  container.classList.add("card");
  container.classList.add(`${category}`);

  const cardImg = document.createElement("img");
  cardImg.src = imgUrl;
  cardImg.alt = "카드 이미지";

  const likeImg = document.createElement("img");
  likeImg.src = "../assets/icons/like.svg";
  likeImg.width = "30";
  likeImg.alt = "좋아요 이미지";

  const nameText = document.createElement("p");
  nameText.innerText = name;

  const valueText = document.createElement("p");
  valueText.innerText = value + "원";

  container.append(cardImg, likeImg, nameText, valueText);

  content.appendChild(container);

  /* 슬라이더 컨텐츠 */
  const sliderCard = document.createElement("img");
  sliderCard.src = imgUrl;
  sliderCard.alt = "배너 이미지";
  sliderCard.classList.add("slide");

  slider.appendChild(sliderCard);
});

function handleClickNav(innerText) {
  content.innerHTML = "";
  title.innerText = innerText;

  const filteredData = SHOPPING_LIST.filter((item) =>
    innerText === "전체" ? true : item.category === innerText
  );

  filteredData.forEach((item) => {
    const { name, value, imgUrl } = item;

    const container = document.createElement("div");
    container.classList.add("card");

    const cardImg = document.createElement("img");
    cardImg.src = imgUrl;

    const likeImg = document.createElement("img");
    likeImg.src = "../assets/icons/like.svg";
    likeImg.width = "30";

    const nameText = document.createElement("p");
    nameText.innerText = name;

    const valueText = document.createElement("p");
    valueText.innerText = value + "원";

    container.append(cardImg, likeImg, nameText, valueText);

    content.appendChild(container);
  });
}

listItem.forEach((item) => {
  const category = item.innerText;
  item.addEventListener("click", () => handleClickNav(category));
});
