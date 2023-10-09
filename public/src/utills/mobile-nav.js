const mobileNav = () => {
  const bar = document.querySelector(".header__bars");
  const mobileLinks = document.querySelectorAll(".mobile-nav__link");
  let isOpen = false;
  bar.addEventListener("click", () => {
    const mobileNav = document.querySelector(".mobile-nav");
    isOpen = !isOpen;
    if (isOpen) {
      document.body.style.overflowY = "hidden";
      mobileNav.style.display = "flex";
    } else {
      mobileNav.style.display = "none";
      document.body.style.overflowY = "auto";
    }
    mobileLinks.forEach((mobilelink) => {
      mobilelink.addEventListener("click", () => {
        isOpen = false;
        mobileNav.style.display = "none";
        document.body.style.overflowY = "auto";
      });
    });
  });
};

export default mobileNav;
