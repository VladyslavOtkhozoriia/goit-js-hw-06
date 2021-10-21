const itemRef = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemRef.length} `);

itemRef.forEach((element) => {
  console.log(`Categories:  ${element.querySelector("h2").textContent} `);
  console.log(`Elements: ${element.querySelectorAll("li").length}`);
});
