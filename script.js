let navbar = document.querySelector(".navList");
let humburger = document.querySelector(".humburger");

humburger.addEventListener("click", function () {
  navbar.classList.toggle("active");
  humburger.classList.toggle("active");
});
window.onscroll = () => {
  navbar.classList.remove("active");
  humburger.classList.remove("active");
};
