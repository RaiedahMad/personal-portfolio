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

// const name1 = document.querySelector(".name");

// gsap.to(".name1", {
//   x: 50,
//   scrollTrigger: {
//     trigger: ".name1",
//     start: "top center",
//     end: "+=200",
//     scrub: true,
//   },
// });

let mm = gsap.matchMedia();

mm.add("(max-width: 425px)", () => {
  // Animation for screens up to 425px (Mobile)
  gsap.to(".name1", {
    x: 50, // Smaller movement
    scrollTrigger: {
      trigger: ".name1",
      start: "top center",
      end: "+=200",
      scrub: 0.5,
    },
  });
});

mm.add("(min-width: 426px)", () => {
  // Animation for screens larger than 425px (Tablet & Desktop)
  gsap.to(".name1", {
    x: 100, // Larger movement
    scrollTrigger: {
      trigger: ".name1",
      start: "top center",
      end: "+=300",
      scrub: 0.5,
    },
  });
});

gsap.from(".about", {
  y: 100, // Neeche se upar
  opacity: 0, // Pehle hidden ho
  duration: 1.5, // Smooth animation
  ease: "power3.out",
  stagger: 0.2, // Ek ek karke aaye
  scrollTrigger: {
    trigger: ".about-container", // Jis element se trigger ho
    start: "top 80%", // Jab visible ho tab start ho
    end: "top 30%",
    scrub: 2,
  },
});

gsap.from(".word", {
  y: 100, // Neeche se upar
  opacity: 0, // Pehle hidden ho
  duration: 1.5, // Smooth animation
  ease: "power3.out",
  stagger: 0.2, // Ek ek karke aaye
  scrollTrigger: {
    trigger: ".words-container", // Jis element se trigger ho
    start: "top 80%", // Jab visible ho tab start ho
    end: "top 30%",
    scrub: 2,
  },
});
// Mobile Menu Functionality
const mobileMenu = document.querySelector(".mobile-menu");
const mobileNav = document.querySelector(".mobile-nav");
const navLinks = document.querySelectorAll(".nav-links a, .mobile-nav a");

// Toggle mobile menu
mobileMenu.addEventListener("click", () => {
  mobileNav.style.display = "block";
  setTimeout(() => {
    mobileNav.classList.toggle("active");
  }, 10);
});

// Close mobile menu when clicking a link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("active");
    setTimeout(() => {
      mobileNav.style.display = "none";
    }, 300);
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const navHeight = document.querySelector("nav").offsetHeight;
      const targetPosition =
        target.getBoundingClientRect().top + window.pageYOffset - navHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});

// Add active class to nav links on scroll
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-links a");

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.pageYOffset >= sectionTop - 150) {
      const id = section.getAttribute("id");
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${id}`) {
          link.classList.add("active");
        }
      });
    }
  });
});
