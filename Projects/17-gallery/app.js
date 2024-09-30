function getElement(selection) {
	const element = document.querySelector(selection);
	if (element) {
		return element;
	}
	throw new Error(`Please check "${selection}" selector, no such element exists`);
}

function Gallery(element) {
	this.container = element;
	this.list = [...element.querySelectorAll('.img')];
	this.modal = getElement('.modal');
	this.mainImg = getElement('.main-img');
	this.imageName = getElement('.image-name');
	this.modalImages = getElement('.modal-images');
	this.closeBtn = getElement('.close-btn');
	this.nextBtn = getElement('.next-btn');
	this.prevBtn = getElement('.prev-btn');
	// one way:
	this.container.addEventListener(
		'click',
		function (e) {
			if (e.target.classList.contains('img')) {
				this.openModal(e.target, this.list);
			}
		}.bind(this)
	);
	// alternatively:
	/* 	let self = this;
	this.container.addEventListener('click', function(e){
		if (e.target.classList.contains('img')) {
				self.openModal(e.target, this.list);
			}
	}); */
}
Gallery.prototype.openModal = function (selectedImage, list) {
	this.setMainImage(selectedImage);
	this.modalImages.innerHTML = list
		.map(function (image) {
			return `<img src="${image.src}" alt="${image.alt}" title="${image.title}" data-id="${image.dataset.id}"
		class="${selectedImage.dataset.id === image.dataset.id ? 'modal-img selected' : 'modal-img'}" />`;
		})
		.join(' ');
	this.modal.classList.add('open');
};
Gallery.prototype.setMainImage = function (selectedImage) {
	this.mainImg.src = selectedImage.src;
	this.mainImg.alt = selectedImage.alt;
	this.mainImg.title = selectedImage.title;

	// alternative:
	/* const tempDiv = document.createElement('div');
	tempDiv.innerHTML = `<img src="${selectedImage.src}" alt="${selectedImage.alt}" class="main-img" title="${selectedImage.title}" />`;
	document.querySelector('.main-img').replaceWith(tempDiv.firstChild);
	 */
	// in any case:
	this.imageName.textContent = selectedImage.title;
};

const nature = new Gallery(getElement('.nature'));
const city = new Gallery(getElement('.city'));
