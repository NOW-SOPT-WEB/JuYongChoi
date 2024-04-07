const openBtn = document.getElementById("open-modal");
const exitBtn = document.getElementById("exit-modal");

const modal = document.getElementById("modal");

function handleOpen() {
  modal.style.transform = "translateX(0)";
}

function handleExit() {
  modal.style.transform = "translateX(200px)";
}

openBtn.addEventListener("click", handleOpen);
exitBtn.addEventListener("click", handleExit);
