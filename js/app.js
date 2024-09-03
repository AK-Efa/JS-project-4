const darkBtn = document.querySelector(".darkBtn");
const body = document.querySelector("body");

const darkMode = () => body.classList.toggle("darkmode");

darkBtn.addEventListener("click", darkMode);

