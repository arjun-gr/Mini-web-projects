let container = document.querySelector(".container");

let button = document.querySelector(".loadMore");

let ImageCount = 5;
button.addEventListener("click", () => {
  loadImage();
});

function loadImage() {
  for (let i = 0; i < ImageCount; i++) {
    const newImg = document.createElement("img");
    newImg.setAttribute(
      "src",
      `https://picsum.photos/300?random=${Math.floor(Math.random() * 2000)}`
    );

    container.appendChild(newImg);
  }
}

loadImage();
