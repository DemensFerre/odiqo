const headerScroll = () => {
  const header = document.querySelector(".header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      header.classList.add("header_active");
    } else {
      header.classList.remove("header_active");
    }
  });
};
headerScroll();
