const valueRef = document.querySelector("#value");

let counterValue = 0;

//* DECREMENT

const decrementBtnRef = document.querySelector('[data-action = "decrement"]');

const onDecrementBtnRefClick = () => {
  counterValue -= 1;
  valueRef.textContent = counterValue;
};

decrementBtnRef.addEventListener("click", onDecrementBtnRefClick);

//? INCREMENT

const incrementBtnRef = document.querySelector('[data-action = "increment"]');

const onIncrementBtnRefClick = () => {
  counterValue += 1;
  valueRef.textContent = counterValue;
};

incrementBtnRef.addEventListener("click", onIncrementBtnRefClick);
