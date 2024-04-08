const checkAllBtn = document.getElementById("check-all-btn");
const checkboxs = document.querySelectorAll(".cart_table tr");

function handleAllChecked(e) {
  const checked = e.target.checked;
  const allCheckBox = document.querySelectorAll(".check_item") ?? [];
  const storeList = JSON.parse(localStorage.getItem("list"));

  allCheckBox.forEach((input) => {
    input.checked = checked;
  });

  localStorage.setItem("checkList", JSON.stringify(checked ? storeList : []));
}

function handleChecked(e, itemId) {
  const checked = e.target.checked;

  const storeList = JSON.parse(localStorage.getItem("list"));
  const storeCheckList = JSON.parse(localStorage.getItem("checkList")) ?? [];

  const checkedItem = storeList.find((item) => item.id === +itemId);

  if (checked) {
    storeCheckList.push(checkedItem);
  } else {
    const idx = storeCheckList.findIndex((item) => item.id === +itemId);
    storeCheckList.splice(idx, 1);
  }
  localStorage.setItem("checkList", JSON.stringify(storeCheckList));
}

checkAllBtn.addEventListener("change", (e) => handleAllChecked(e));

checkboxs.forEach((checkbox, idx) => {
  if (idx === 0) return;

  const box = checkbox.children[0].querySelector("input");
  const id = checkbox.getAttribute("id");

  box.addEventListener("change", (e) => handleChecked(e, id));
});
