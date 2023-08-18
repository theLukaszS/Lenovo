const hamburgerIcon = document.querySelector('.hamburger-icon');
const navLinks = document.querySelector('.nav-links');

hamburgerIcon.addEventListener('click', () => {
    hamburgerIcon.classList.toggle('active');
    navLinks.classList.toggle('active');
});







document.addEventListener("scroll", function() {
  const textContent = document.querySelector(".text-content-part-one");
  const boundingRect = textContent.getBoundingClientRect();
  if (boundingRect.top <= window.innerHeight * 0.8) {
      textContent.style.opacity = "1";
      textContent.style.transform = "translate(-50%, -50%)";
  }
});


const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})

document.addEventListener("scroll", function() {
  const textContent = document.querySelector(".text-content-last-part-one");
  const boundingRect = textContent.getBoundingClientRect();
  if (boundingRect.top <= window.innerHeight * 0.8) {
      textContent.style.opacity = "1";
      textContent.style.transform = "translate(-50%, -50%)";
  }
});

