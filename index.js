let seeMoreBtn = document.querySelector("#see-more-btn");
let seeMoreBtnContainer = document.querySelector(".see-more-btn-container");


let url = "https://fakestoreapi.com/products";

let startIndex = 0;
let currImages = 3;
seeMoreBtn.addEventListener("click", () => {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);

      for (let i = startIndex; i < currImages + startIndex; i++) {
        if (i < data.length) {
          let imgUrl = data[i];
          let imageContainer = document.querySelector(".latest-work-cards");
          let image = document.createElement("img");
          image.style.cssText = "height: 350px; width:350px;";
          image.setAttribute("src", imgUrl.image);
          imageContainer.appendChild(image);
        } else {
          seeMoreBtn.style.display = "none";
        }
      }

      startIndex += currImages;
    });
});
