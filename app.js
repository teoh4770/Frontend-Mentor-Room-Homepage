// open the navbar in mobile view

// selectors
const burgerBtn = document.querySelector(".mobile-nav .menu-button");
const openNav = document.querySelector(".open-nav");
const mobileNav = document.querySelector(".mobile-nav");
const desktopNav = document.querySelector(".desktop-nav");
const navbarBtn = openNav.querySelector(".menu-button");
const body = document.body;
const overlay = document.querySelector(".overlay");
const desktopLayout = document.querySelector(".desktop");
const mobileLayout = document.querySelector(".mobile");

const heroImage = document.querySelector(".hero-section .pic");
const heroTitle = document.querySelector(".mission h2");
const heroContent = document.querySelector(".mission p");
const slider1 = document.querySelector(".hero-section .slider");
const slider2 = document.querySelector(".second-slider");

const hmContainer = document.querySelector(".hero-mission-container");

console.log(hmContainer.children);

let i = 0; // the index of the image and text

let images = [
  "./images/mobile-image-hero-1.jpg",
  "./images/mobile-image-hero-2.jpg",
  "./images/mobile-image-hero-3.jpg",
];

const text = [
  {
    title: "Discover innovative ways to decorate",
    p: `We provide unmatched quality, comfort, and style for property owners
    across the country. Our experts combine form and function in bringing
    your vision to life. Create a room in your own style with our collection
    and make your property a reflection of you and what you love.`,
  },
  {
    title: "We are available all across the globe",
    p: `With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.`,
  },
  {
    title: "Manufactured with the best materials",
    p: `Our modem furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible, With three decades of experience in this industry, we understand what customers want for their home and office.`,
  },
];

// reset
updateImageBySize();
updateNavbar();
updateSlider();
slider();
// event listener
burgerBtn.addEventListener("click", openNavbar);
navbarBtn.addEventListener("click", closeNavbar);

addEventListener("resize", () => {
  updateImageBySize();
  updateNavbar();
  updateSlider();
  slider();
});

[left, right].forEach((element) =>
  element.addEventListener("click", navigateSlider)
);

function slider() {
  const lefts = document.querySelectorAll(".js-left");
  const rights = document.querySelectorAll(".js-right");
  [...lefts, ...rights].forEach((element) =>
    element.addEventListener("click", navigateSlider)
  );
}

function openNavbar() {
  // open the extra navbar by removing the 'hidden' class from the overlay itself
  // add no-scroll class to the body itself
  overlay.classList.remove("hidden");
  openNav.classList.remove("hidden");
  body.classList.add("no-scroll");
}

function closeNavbar() {
  // close the extra navbar by adding the 'hidden' class to the overlay itself
  // remove no-scroll class from the body itself
  overlay.classList.add("hidden");
  openNav.classList.add("hidden");
  body.classList.remove("no-scroll");
}

function navigateSlider(e) {
  // determine the index of the image and text
  const isRight = e.target.id == "right";
  i = isRight ? i + 1 : i - 1;
  if (i < 0) {
    i = images.length - 1;
  } else if (i > images.length - 1) {
    i = 0;
  }

  let textObj = text[i];
  let img = images[i];
  let title = textObj.title;
  let p = textObj.p;
  let arr = img.split("/");
  let alt = arr[arr.length - 1];

  heroImage.src = img;
  heroImage.alt = alt;
  heroTitle.textContent = title;
  heroContent.textContent = p;
}

function updateImageBySize() {
  if (innerWidth >= 500) {
    images = images.map((imageStr) => {
      return imageStr.replace("mobile", "desktop");
    });
  } else {
    images = images.map((imageStr) => {
      return imageStr.replace("desktop", "mobile");
    });
  }

  // update image
  heroImage.src = images[i];
  heroImage.alt = images[i].split("/")[images[i].split("/").length - 1];
}

function updateNavbar() {
  if (innerWidth >= 800) {
    mobileNav.classList.add("hidden");
    desktopNav.classList.remove("hidden");
  } else {
    mobileNav.classList.remove("hidden");
    desktopNav.classList.add("hidden");
  }
}

function updateSlider() {
  if (innerWidth >= 1000) {
    slider1.classList.add("hidden");
    slider2.classList.remove("hidden");
  } else {
    slider1.classList.remove("hidden");
    slider2.classList.add("hidden");
  }
}
