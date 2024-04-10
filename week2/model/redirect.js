/* cart 페이지 */
const homeBtn = document.getElementById("home-btn");

homeBtn?.addEventListener("click", () => {
  // home.html 에선 homeBtn이 없으므로 에러. 따라서 옵셔널 체이닝 사용
  window.location.href = "home.html";
});

const mainLogo = document.getElementById("main_logo");

function handleGoHome() {
  window.location.href = "home.html";
}

mainLogo.addEventListener("click", handleGoHome);

const cartText = document.getElementById("modal_cart-text");

/* home 페이지 */

function handleGoCart() {
  window.location.href = "cart.html";
}

cartText.addEventListener("click", handleGoCart);
