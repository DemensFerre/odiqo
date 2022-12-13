const headerScroll = () => {
  const header = document.querySelector(".header");
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 100) {
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
  const body = document.querySelector("body");
  const burger = document.querySelector(".header__burger");
  const menu = document.querySelector(".header__nav");
  const menuClose = document.querySelector(".header__nav-close");
  burger.addEventListener("click", () => {
    menu.classList.add("header__nav_active");
    body.classList.add("body_lock");
  });
  menuClose.addEventListener("click", () => {
    menu.classList.remove("header__nav_active");
    body.classList.remove("body_lock");
  });
};

const scrollToSection = () => {
  const sections = document.querySelectorAll("#js-section");
  const headerHight = document.querySelector(".header").clientHeight + 20;
  const links = document.querySelectorAll(".js-link");

  let sectionName = [];

  const scrollBehavior = (selector) => {
    const element = document.querySelector(selector);
    window.scroll({
      left: 0,
      top: element.offsetTop - headerHight,
      behavior: "smooth",
    });
  };

  sections.forEach((item) => {
    sectionName.push(item.className);
  });

  links.forEach((item) => {
    item.addEventListener("click", () => {
      for (i = 0; i < sectionName.length; i++) {
        if (sectionName[i] === item.dataset.linkToSection) {
          console.log(sectionName[i]);
          scrollBehavior(`.${sectionName[i]}`);
        }
      }
    });
  });
};

const closeMenu = () => {
  const body = document.querySelector("body");
  const menu = document.querySelector(".header__nav");
  const links = document.querySelectorAll(".js-link");

  links.forEach((item) => {
    item.addEventListener("click", () => {
      body.classList.remove("body_lock");
      menu.classList.remove("header__nav_active");
    });
  });
};

headerScroll();
videosPlay();
burgerOpen();
scrollToSection();
closeMenu();
