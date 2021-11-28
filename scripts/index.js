let cartItems = 0;
let startIndex = 0;
let endIndex = 6;

const moreItemsArr = [
  {
    img: "../assets/img/oculus_cabel.jpg",
    alt: "oculus case",
    description:
      "Oculus Link Virtual Reality Headset Cable for Quest 2 and Quest - 16FT (5M) - PC VR",
    stars: "four-five-stars",
    votes: "4,573",
    price: "7.00",
  },
  {
    img: "../assets/img/oculus_case.jpg",
    description:
      "Oculus Quest 2 Carrying Case for Lightweight, Portable Protection - VR",
    stars: "four-five-stars",
    votes: "7,822",
    price: "49.00",
  },
  {
    img: "../assets/img/oculus_elit_strap.jpg",
    description:
      "Oculus Quest 2 Elite Strap for Enhanced Support and Comfort in VR",
    stars: "four-five-stars",
    votes: "8,929",
    price: "49.00",
  },
  {
    img: "../assets/img/oculus_battery_strap.jpg",
    description:
      "Oculus Quest 2 Elite Strap with Battery for Enhanced Comfort and Playtime in VR",
    stars: "four-five-stars",
    votes: "15",
    price: "109.00",
  },
  {
    img: "../assets/img/oculus_kiwi_head_strap.jpg",
    description:
      "KIWI design Head Strap for Oculus Quest 2 Accessories Elite Strap for Enhanced Support and Comfort in VR",
    stars: "four-five-stars",
    votes: "240",
    price: "39.98",
  },
  {
    img: "../assets/img/oculus_case_and_elite_strap.jpg",
    description:
      "Oculus Quest 2 Elite Strap with Battery and Carrying Case for Enhanced Comfort…",
    stars: "four-five-stars",
    votes: "240",
    price: "39.98",
  },
  {
    img: "../assets/img/oculus_snake_cabel.jpg",
    description:
      "Quest Link Cable 16ft, VOKOO Oculus Quest Link Cable, High Speed Data Transfer & Fast Charging USB C Cable…",
    stars: "four-five-stars",
    votes: "5,758",
    price: "25.99",
  },
  {
    img: "../assets/img/oculus_salar_case.jpg",
    description:
      "Quest Link Cable 16ft, VOKOO Oculus Quest Link Cable, High Speed Data Transfer & Fast Charging USB C Cable…",
    stars: "four-five-stars",
    votes: "5,758",
    price: "25.99",
  },
  {
    img: "../assets/img/oculus_light_blocker.jpg",
    description:
      "Oculus Quest 2 Fit Pack with Two Alternate-Width Facial Interfaces…",
    stars: "four-five-stars",
    votes: "5",
    price: "39.00",
  },
  {
    img: "../assets/img/oculus_kiwi_controllers.jpg",
    description:
      "KIWI design Controller Grips Cover Accessories for Oculus Quest 2 with Battery Opening, Protector with Knuckle…",
    stars: "four-five-stars",
    votes: "510",
    price: "34.99",
  },
  {
    img: "../assets/img/oculus_long_cabel.jpg",
    description:
      "Oculus Link Cable 16FT, Compatible for Oculus Quest 2 Link Cable, Fatorm USB 3.2 Gen1 VR Headset Cable, Type A…",
    stars: "four-five-stars",
    votes: "81",
    price: "22.99",
  },
  {
    img: "../assets/img/oculus_cabel.jpg",
    alt: "oculus case",
    description:
      "Oculus Link Virtual Reality Headset Cable for Quest 2 and Quest - 16FT (5M) - PC VR",
    stars: "four-five-stars",
    votes: "4,573",
    price: "7.00",
  },
  {
    img: "../assets/img/oculus_case.jpg",
    description:
      "Oculus Quest 2 Carrying Case for Lightweight, Portable Protection - VR",
    stars: "four-five-stars",
    votes: "7,822",
    price: "49.00",
  },
  {
    img: "../assets/img/oculus_elit_strap.jpg",
    description:
      "Oculus Quest 2 Elite Strap for Enhanced Support and Comfort in VR",
    stars: "four-five-stars",
    votes: "8,929",
    price: "49.00",
  },
];

const cartBtn = document.querySelector(".add-to-cart");
const cartValue = document.querySelector(".cart-value");

cartBtn.addEventListener("click", () => {
  cartItems++;
  cartValue.textContent = cartItems;
});

const carousel = document.querySelector(".carousel");

function setCarousel(startIndex, endIndex) {
  carousel.innerHTML = "";

  for (let index = startIndex, element; index <= endIndex; index++) {
    element = document.createElement("div");
    element.classList.add("carousel-item");
    element.classList.add(`item-${index}`);
    element.innerHTML = `<img src=${moreItemsArr[index].img} alt="${moreItemsArr[index].alt}">
<p><a href="#">${moreItemsArr[index].description}</a></p>
<p><span class="${moreItemsArr[index].stars}"></span><a href="#"> ${moreItemsArr[index].votes}</a></p>
<p class="more-item-price"><span class="dollar-sign">$</span>${moreItemsArr[index].price}</p>`;
    carousel.appendChild(element);
  }
}

setCarousel(0, 6);

const nextItemsBtn = document.querySelector(".next-item");
const prevItemsBtn = document.querySelector(".prev-item");
const currentPage = document.querySelector(".current-page");

nextItemsBtn.addEventListener("click", () => {
  if (startIndex === 0) {
    startIndex = endIndex + 1;
    endIndex = startIndex + 6;
    setCarousel(startIndex, endIndex);
    currentPage.textContent = "Page 2 of 2";
  }
});

prevItemsBtn.addEventListener("click", () => {
  if (startIndex === 7) {
    endIndex = startIndex - 1;
    startIndex = 0;
    setCarousel(startIndex, endIndex);
    currentPage.textContent = "Page 1 of 2";
  }
});

const imgUrlArr = [
  "../assets/img/oculus.jpg",
  "../assets/img/digital_credit.jpg",
  "../assets/img/advanced.jpg",
  "../assets/img/storage.jpg",
  "../assets/img/new_realities.jpg",
  "../assets/img/included.jpg",
  "../assets/img/oculus_video_img.jpg",
];
const productImgArr = document.querySelectorAll(".product-img");
const selctedProductImg = document.querySelector(".product-images-selected");

productImgArr.forEach((prudctImg, index) => {
  prudctImg.addEventListener("mouseover", () => {
    selctedProductImg.style.background = `top / contain no-repeat url(${imgUrlArr[index]})`;
  });
});
