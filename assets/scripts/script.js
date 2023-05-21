// HTML.
const imageModal = document.querySelector(".image-modal");
const imageContainer = document.querySelector(".preview__image-container");

imageContainer.addEventListener("click", () => {
	const image = imageContainer.querySelector("img");
	imageModal.innerHTML = `<img src="${image.src}" alt="${image.alt}">`;
	imageModal.dataset.displayed = "true";
});

imageModal.addEventListener("click", (e) => {
	if (e.target.tagName !== "IMG") imageModal.dataset.displayed = "false";
});