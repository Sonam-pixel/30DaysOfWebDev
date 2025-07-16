// Typing effect
const typingElement = document.getElementById("typing");
const words = ["A Web Developer.", "A Problem Solver.", "An HTML/CSS Ninja."];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type() {
  currentWord = words[i];
  typingElement.innerHTML = isDeleting
    ? currentWord.substring(0, j--)
    : currentWord.substring(0, j++);

  if (!isDeleting && j === currentWord.length + 1) {
    isDeleting = true;
    setTimeout(type, 1000);
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % words.length;
    setTimeout(type, 300);
  } else {
    setTimeout(type, isDeleting ? 50 : 150);
  }
}
type();

// Scroll to top button
const topBtn = document.getElementById("topBtn");
window.onscroll = () => {
  topBtn.style.display = window.scrollY > 200 ? "block" : "none";
};
topBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
