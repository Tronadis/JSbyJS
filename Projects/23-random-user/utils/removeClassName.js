const removeClassName = (items, className) => {
	items.forEach((item) => item.classList.remove(`${className}`));
};

export default removeClassName;
