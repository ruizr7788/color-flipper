// selectors
const colorText = document.getElementById("color");
const colorSection = document.getElementById("color-section");
const button = document.getElementById("button");
const simple = document.querySelector(".option-simple");
const hex = document.querySelector(".option-hex");

// random color function
const setBGHex = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  colorSection.style.backgroundColor = "#" + randomColor;
  colorText.textContent = `#${randomColor}`;
};
button.addEventListener("click", setBGHex);
