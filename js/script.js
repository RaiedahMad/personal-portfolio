const circle = document.querySelector(".circle");

window.addEventListener("mousemove", (e) => {
  gsap.to(circle, {
    x: e.clientX,
    y: e.clientY,
    duration: 1, // Adjust speed
    ease: "power2.out",
  });
});

gsap.to(".letter", {
  opacity: 1,
  x: 0, // Side se aaye
  y: () => gsap.utils.random(0, 0), // Har letter alag height se aaye
  rotation: () => gsap.utils.random(0, 0), // Random rotation har letter ke liye
  // rotationX: () => gsap.utils.random(-100, 60),
  // rotationY: () => gsap.utils.random(-40, -60),
  duration: 1,
  stagger: 0.1, // Har letter delay ke sath aaye
  ease: "power4.out",
});

gsap.to(".name1", {
  x: 0,
  scrollTrigger: {
    trigger: ".name1",
  },
});
