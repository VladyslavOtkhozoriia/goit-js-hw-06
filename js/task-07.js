const inputRef = document.querySelector("#font-size-control");

const textRef = document.querySelector("#text");

const onInputChange = function (rangeValue) {
  const fontSizeChange = rangeValue.currentTarget.value + "px";
  textRef.style.fontSize = fontSizeChange;
};

inputRef.addEventListener("input", onInputChange);
