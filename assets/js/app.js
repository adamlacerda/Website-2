const navBar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (this.scrollY >= 100) {
    navBar.classList.add("scrolled");
  } else {
    navBar.classList.remove("scrolled");
  }
});
