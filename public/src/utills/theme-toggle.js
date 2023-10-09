const themeToggle = () => {
  const suns = document.querySelectorAll("#theme-toggle");

  suns.forEach((button) => {
    button.addEventListener("click", () => {
      document.body.classList.toggle("light-mode");
    });
  });
};

export default themeToggle;
