const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryRef = document.querySelector(".gallery");

const makeFunctionGalleryRef = ({ url, alt }) => {
  return `<li class = "imageGallery"> <img src = "${url}" alt = "${alt}" width = 450 </li>`;
};

const galleryElements = images.map(makeFunctionGalleryRef).join(" ");
galleryRef.insertAdjacentHTML("afterbegin", galleryElements);


//* JS-STYlES
galleryRef.style.listStyle = "none";
galleryRef.style.display = "flex";
galleryRef.style.justifyContent = "space-evenly";
galleryRef.style.alignItems = "center";
