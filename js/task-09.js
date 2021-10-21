function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRef = document.querySelector("body");

const buttonRef = document.querySelector("button");
console.log(buttonRef);

const colorTextRef = document.querySelector(".color");
console.log(colorTextRef);

const onButtonRefClick = function () {
  bodyRef.style.backgroundColor = getRandomHexColor();
  colorTextRef.innerHTML = bodyRef.style.backgroundColor;
};

buttonRef.addEventListener("click", onButtonRefClick);
