const headline = document.getElementById("headline");
const car = document.getElementById("car");
const stats = document.querySelectorAll(".stat");

const text = "WELCOME ITZ FIZZ";

/* Split headline into letters */

text.split("").forEach(letter => {
  const span = document.createElement("span");
  span.textContent = letter;
  headline.appendChild(span);
});


/* Intro Animations */

window.addEventListener("load", () => {

  // Headline animation
  gsap.from(".headline span", {
    y: 80,
    opacity: 0,
    stagger: 0.05,
    duration: 1,
    ease: "power3.out"
  });

  // Stats animation
  gsap.from(".stat", {
    y: 40,
    opacity: 0,
    stagger: 0.2,
    delay: 0.5,
    duration: 0.8,
    ease: "power2.out"
  });

});


/* Scroll Animation */

window.addEventListener("scroll", () => {

  const scrollY = window.scrollY;

  const moveX = scrollY * 0.5;
  const rotate = scrollY * 0.02;

  gsap.to(car, {
    x: moveX,
    rotation: rotate,
    duration: 0.6,
    ease: "power2.out"
  });

});
