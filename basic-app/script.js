let menuIcon = document.querySelector(".menu");
let list = document.querySelector(".list ul");

menuIcon.addEventListener("click", () => {
  list.classList.toggle("show");
});
