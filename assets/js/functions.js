// menu buttons
const menu_btn = document.getElementsByClassName("menu-button")[0];
const header = document.getElementsByTagName("header")[0];
menu_btn.addEventListener("click", () => {
  menu_btn.classList.toggle("active");
  header.classList.toggle("opened");
});

// Header scroll code
document.addEventListener("scroll", () => {
  let currentHeight = window.scrollY;
  let elemProp = header.getBoundingClientRect();

  if (currentHeight >= elemProp.top && currentHeight >= elemProp.bottom)
    header.classList.add("moved");
  else if (currentHeight <= 120) header.classList.remove("moved");
});

// detecting the page for header code
const pageTitle = document.title; // remeber to change according to home page title
console.log(pageTitle);
pageTitle != "Home"
  ? header.classList.add("ordinary-pages")
  : header.classList.remove("ordinary-pages");

/* Home page code ------------------------- */

// Slider code
const slides = document.getElementsByClassName("slide");
const next_btn = document.getElementById("next-btn");
const prev_btn = document.getElementById("prev-btn");

if ((slides, next_btn, prev_btn)) {
  let i = 0;
  next_btn.addEventListener("click", () => {
    slides[i].classList.remove("active");
    i = (i + 1) % slides.length;
    slides[i].classList.add("active");
  });

  prev_btn.addEventListener("click", () => {
    slides[i].classList.remove("active");
    i = (i - 1 + slides.length) % slides.length;
    slides[i].classList.add("active");
  });
}

// posts content changer
const title = document.getElementsByClassName("targeted-title")[0];
const excerpt = document.getElementsByClassName("targeted-excerpt")[0];
const img = document.getElementsByClassName("targeted-img")[0];

const posts_titles = document.getElementsByClassName("posts-titles");
const posts_excerpts = document.getElementsByClassName("posts-excerpt");
const posts_img = document.getElementsByClassName("posts-img");

const next_post_bt = document.getElementsByClassName("next-post")[0];
const prev_post_bt = document.getElementsByClassName("prev-post")[0];

if (
  (title,
  excerpt,
  img,
  posts_excerpts,
  posts_img,
  posts_titles,
  next_post_bt,
  prev_post_bt)
) {
  let x = 0;
  function get_values(arr_v) {
    title.innerHTML = posts_titles[arr_v].innerHTML;
    excerpt.innerHTML = posts_excerpts[arr_v].innerHTML;
    img.src = posts_img[arr_v].src;
  }
  get_values(x);

  next_post_bt.addEventListener("click", () => {
    x = (x + 1) % posts_titles.length;
    get_values(x);
    console.log(x);
  });

  prev_post_bt.addEventListener("click", () => {
    x = (x - 1 + posts_titles.length) % posts_titles.length;
    get_values(x);
    console.log(x);
  });
}

// single package slider
const left = document.getElementById("left-scroll");
const right = document.getElementById("right-scroll");
const scrollElement = document.getElementsByClassName("img-slider-wrap")[0];

if ((left, right, scrollElement)) {
  left.addEventListener("click", () => {
    scrollElement.scrollLeft -= 500;
  });

  right.addEventListener("click", () => {
    scrollElement.scrollLeft += 500;
  });
}
