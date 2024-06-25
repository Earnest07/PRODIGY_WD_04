var navbar = document.querySelector(".navbar");

window.onscroll = () => {
  this.scrollY > 20
    ? navbar.classList.add("sticky")
    : navbar.classList.remove("sticky");
};

const FilterContainer = document.querySelector(".portfolio-filter"),
  filterBtns = FilterContainer.children;
const totalFilterBtn = filterBtns.length;
const PortfolioItems = document.querySelectorAll(".portfolio-item"),
  totalPortfolioItem = PortfolioItems.length;
for (let i = 0; i < totalFilterBtn; i++) {
  filterBtns[i].addEventListener("click", function () {
    FilterContainer.querySelector(".active").classList.remove("active");
    this.classList.add("active");
    const filterValue = this.getAttribute("data-filter");
    for (let k = 0; k < totalPortfolioItem; k++) {
      if (filterValue === PortfolioItems[k].getAttribute("data-category")) {
        PortfolioItems[k].classList.remove("hide");
        PortfolioItems[k].classList.add("show");
      } else {
        PortfolioItems[k].classList.remove("show");
        PortfolioItems[k].classList.add("hide");
      }
      if (filterValue === "all") {
        PortfolioItems[k].classList.remove("hide");
        PortfolioItems[k].classList.add("show");
      }
    }
  });
}

/* ===== LightBox ===== */

const lightbox = document.querySelector(".lightbox"),
  lightboxImg = lightbox.querySelector(".lightbox-img"),
  lightboxClose = lightbox.querySelector(".lightbox-close"),
  lightboxText = lightbox.querySelector(".caption-text"),
  lightboxCounter = lightbox.querySelector(".caption-counter");
let itemIndex = 0;
for (let i = 0; i < totalPortfolioItem; i++) {
  PortfolioItems[i].addEventListener("click", function () {
    itemIndex = i;
    changeItem();
    toggleLightbox();
  });
}

function changeItem() {
  let imgSrc = PortfolioItems[itemIndex]
    .querySelector(".portfolio-img img")
    .getAttribute("src");

  lightboxImg.src = imgSrc;
  lightboxText.innerHTML =
    PortfolioItems[itemIndex].getAttribute("data-category");
  lightboxCounter.innerHTML = itemIndex + 1 + " of " + totalPortfolioItem;
}

function nextItem() {
  if (itemIndex === totalPortfolioItem - 1) {
    itemIndex = 0;
    changeItem();
  } else {
    itemIndex++;
    changeItem();
  }
}
function prevItem() {
  if (itemIndex === 0) {
    itemIndex = totalPortfolioItem - 1;
    changeItem();
  } else {
    itemIndex--;
    changeItem();
  }
}

function toggleLightbox() {
  lightbox.classList.toggle("open");
}

lightbox.addEventListener("click", function (event) {
  if (event.target === lightboxClose || event.target === lightbox) {
    toggleLightbox();
  }
});
