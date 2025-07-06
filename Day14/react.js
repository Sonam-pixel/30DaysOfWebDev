document.getElementById("clickBtn").addEventListener("click", () => {
  document.getElementById("clickMsg").textContent = "Button was clicked!";
});

document.getElementById("inputBox").addEventListener("input", (e) => {
  document.getElementById("inputMsg").textContent = `You typed: ${e.target.value}`;
});

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("formMsg").textContent = "Form submitted successfully!";
});

document.getElementById("hoverBox").addEventListener("mouseover", () => {
  document.getElementById("hoverMsg").textContent = "You're hovering!";
});

document.addEventListener("keydown", (e) => {
  console.log(`Key pressed: ${e.key}`);
});