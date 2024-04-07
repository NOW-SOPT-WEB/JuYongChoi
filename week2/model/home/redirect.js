const cartText = document.getElementById("cart_text");
const mainLogo = document.getElementById("main_logo");

function handleGoHome() {
  window.location.href = "home.html";
}

function handleGoCart() {
  window.location.href = "cart.html";
}

cartText.addEventListener("click", handleGoCart);
mainLogo.addEventListener("click", handleGoHome);
