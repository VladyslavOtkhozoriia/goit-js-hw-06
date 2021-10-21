const inputRef = document.querySelector("#validation-input");

const dataLengthRef = inputRef.getAttribute("data-length");

const onInputRefChange = function (quantityOfSymbols) {
  if (quantityOfSymbols.currentTarget.value.length === Number(dataLengthRef)) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.add("invalid");
    inputRef.classList.remove("valid");
  }
};
inputRef.addEventListener("blur", onInputRefChange);
