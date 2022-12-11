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

const videosPlay = () => {
  const play = document.querySelector(".videos__play");

  play.addEventListener("click", () => {
    const videoItem = document.querySelector(".videos__item");

    videoItem.insertAdjacentHTML(
      "beforeend",
      '<iframe \
      src="https://www.youtube.com/embed/CxuiFNYnEr4" \
      title="YouTube video player" \
      frameborder="0" \
      allow="accelerometer; autoplay; clipboard-write; encrypted-media;  gyroscope; picture-in-picture" \
      allowfullscreen class="videos__video"></iframe>'
    );
  });
};

const burgerOpen = () => {
  const burger = document.querySelector(".header__burger");
  const menu = document.querySelector(".header__nav");
  const menuClose = document.querySelector(".header__nav-close");
  burger.addEventListener("click", () => {
    menu.classList.add("header__nav_active");
  });
  menuClose.addEventListener("click", () => {
    menu.classList.remove("header__nav_active");
  });
};

headerScroll();
videosPlay();
burgerOpen();
