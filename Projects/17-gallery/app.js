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
	this.closeModal = this.closeModal.bind(this);
	this.toPrevImage = this.toPrevImage.bind(this);
	this.toNextImage = this.toNextImage.bind(this);
	this.chooseImage = this.chooseImage.bind(this);
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
	this.closeBtn.addEventListener('click', this.closeModal);
	this.prevBtn.addEventListener('click', this.toPrevImage);
	this.nextBtn.addEventListener('click', this.toNextImage);
	this.modalImages.addEventListener('click', this.chooseImage);
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
Gallery.prototype.closeModal = function (e) {
	// e.target.parentElement.parentElement.classList.remove('open');
	// e.target.closest('.modal').classList.remove('open');
	this.modal.classList.remove('open');
	this.closeBtn.removeEventListener('click', this.closeModal);
	this.prevBtn.removeEventListener('click', this.toPrevImage);
	this.nextBtn.removeEventListener('click', this.toNextImage);
	this.modalImages.removeEventListener('click', this.chooseImage);
};
Gallery.prototype.toPrevImage = function () {
	const selected = this.modalImages.querySelector('.selected');
	const prevImage = selected.previousElementSibling || this.modalImages.lastElementChild;
	selected.classList.remove('selected');
	prevImage.classList.add('selected');
	this.setMainImage(prevImage);
};
Gallery.prototype.toNextImage = function () {
	const selected = this.modalImages.querySelector('.selected');
	const nextImage = selected.nextElementSibling || this.modalImages.firstElementChild;
	selected.classList.remove('selected');
	nextImage.classList.add('selected');
	this.setMainImage(nextImage);
};
Gallery.prototype.chooseImage = function (e) {
	// me:
	const selected = this.modalImages.querySelector('.selected');
	const newImage = e.target;
	selected.classList.remove('selected');
	newImage.classList.add('selected');
	this.setMainImage(newImage);
	// Teacher:
	/* if (e.target.classList.contains('modal-img')) {
		const selected = this.modalImages.querySelector('.selected');
		selected.classList.remove('selected');
		this.setMainImage(e.target);
		e.target.classList.add('selected');
	} */
};

const nature = new Gallery(getElement('.nature'));
const city = new Gallery(getElement('.city'));
