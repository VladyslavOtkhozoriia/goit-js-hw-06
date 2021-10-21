const inputRef = document.querySelector("#name-input");

const nameOutputRef = document.querySelector("#name-output");

const anonymous = nameOutputRef.textContent;

const changeInInput = function (name) {
  if (name.currentTarget.value === "") {
    return (nameOutputRef.textContent = anonymous);
  }
  return (nameOutputRef.textContent = name.currentTarget.value);
};

inputRef.addEventListener("input", changeInInput);
