const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg"
];

const makeImage = images[Math.floor(Math.random() * 8)];

const image = document.createElement("img");
image.src = `img/${makeImage}`;

document.body.appendChild(image);