const circle = document.querySelector(".circle");

window.addEventListener("mousemove", (e) => {
  gsap.to(circle, {
    x: e.clientX,
    y: e.clientY,
    duration: 1, // Adjust speed
    ease: "power2.out",
  });
});
