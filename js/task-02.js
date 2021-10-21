const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listRef = document.querySelector("#ingredients");

const elementsInMemory = ingredients.map((element) => {
  const item = document.createElement("li");
  item.textContent = element;
  item.classList.add("item");
  return item;
});
listRef.append(...elementsInMemory);
