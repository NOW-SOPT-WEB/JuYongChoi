const tableItemBtn = document.querySelectorAll(".cart_table button");
const list = JSON.parse(localStorage.getItem("list"));

function handleDelete(id) {
  const deleted = list.filter((item) => item.id !== id);
  localStorage.setItem("list", JSON.stringify(deleted));

  window.location.reload();
}

tableItemBtn.forEach((btn) => {
  const id = btn.className.match(/\d+/);

  btn.addEventListener("click", () => handleDelete(id + ""));
});
