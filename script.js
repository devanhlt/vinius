document.addEventListener("DOMContentLoaded", function () {
  const ctaButton = document.querySelector("button");

  ctaButton.addEventListener("click", function () {
    window.open("https://www.google.com", "_blank");
  });
});
