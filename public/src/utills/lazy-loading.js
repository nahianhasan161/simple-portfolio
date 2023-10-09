const lazyLoading = () => {
  const lazyImages = document.querySelectorAll(".lazy");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let img = entry.target;
          img.classList.remove("loading");
          img.classList.add("loaded");
          img.src = img.dataset.src;
          observer.unobserve(img);
          console.log(img);
        }
      });
    },
    {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    }
  );
  lazyImages.forEach((image) => {
    observer.observe(image);
  });
};

export default lazyLoading;
