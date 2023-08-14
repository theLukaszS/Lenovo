document.addEventListener("scroll", function() {
    const textContent = document.querySelector(".text-content-part-one");
    const boundingRect = textContent.getBoundingClientRect();

    if (boundingRect.top <= window.innerHeight * 0.8) {
        textContent.style.opacity = "1";
        textContent.style.transform = "translate(-50%, -50%)";
    }
});


