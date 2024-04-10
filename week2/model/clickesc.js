const modal = document.getElementById("buy-modal");
const sidebar = document.getElementById("modal");

window.addEventListener("keypress", (e) => {
  const { key } = e;

  if (key === "Escape") {
    if (modal?.style.display === "flex") modal.style.display = "none";

    if (sidebar?.style.transform === "translateX(0px)")
      sidebar.style.transform = "translateX(200px)";
  }
});
