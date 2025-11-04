// Simple JavaScript example
console.log("Hello, world! Your site is working.");

// Example: change header text when clicked
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header h1");
  if (header) {
    header.addEventListener("click", () => {
      alert("Welcome to My Quran Site!");
    });
  }
});
