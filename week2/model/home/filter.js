const listItem = document.querySelectorAll(".nav li");
const content = document.querySelectorAll(".main section");

content.forEach((item) => {
  if (item.getAttribute("id") === "전체") {
    item.classList.add("show");
  } else {
    item.classList.add("hidden");
  }
});

function handleClickNav(innerText) {
  const content = document.querySelectorAll(".main section");

  content.forEach((item) => {
    if (item.getAttribute("id") === innerText) {
      item.classList.add("show");
      item.classList.remove("hidden");
    } else {
      item.classList.add("hidden");
      item.classList.remove("show");
    }
  });
}

listItem.forEach((item) => {
  const category = item.innerText;
  item.addEventListener("click", () => handleClickNav(category));
});
