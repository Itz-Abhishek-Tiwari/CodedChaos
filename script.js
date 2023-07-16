`use strict`;

// Modal window for search
const openBtn = document.querySelector(".search-btn-modal");
console.log(openBtn);
const closeBtn = document.querySelector(".close-btn");
console.log(closeBtn);
const searchModal = document.querySelector(".modal-search");
console.log(searchModal);

openBtn.addEventListener("click", () => {
  searchModal.showModal();
});

closeBtn.addEventListener("click", () => {
  searchModal.close();
});
