// selectors
const colorText = document.getElementById("color");
const colorSection = document.getElementById("color-section");
const button = document.getElementById("button");
const simple = document.querySelector(".option-simple");
const hex = document.querySelector(".option-hex");

// random color function
const setBGSimple = () => {
  const colorArray = [
    "Red",
    "Green",
    "Rgba(133,122,200)",
    "#F15025",
    "Yellow",
    "Pink",
    "salmon",
    "beige",
  ];
  const random = Math.floor(Math.random() * colorArray.length);
  colorSection.style.backgroundColor = colorArray[random];
  colorText.textContent = `${colorArray[random]}`;
};
button.addEventListener("click", setBGSimple);
