// src/main.js

// Show the loader initially
const loader = document.querySelector(".loader");
loader.style.display = "block";

// Simulate loading (replace this with actual loading logic)
setTimeout(() => {
  // Hide the loader when loading is complete
  loader.style.display = "none";
}, 2000); // 2 seconds delay for demonstration
