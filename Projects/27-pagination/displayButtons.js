const displayButtons = (btnContainer, pages, activeIndex) => {
	let btns = pages.map((_, pageIndex) => {
		return /* html*/ `
        <button class="page-btn ${activeIndex === pageIndex ? 'active-btn' : 'null'}" data-index="${pageIndex}">${
			pageIndex + 1
		}</button>`;
	});
	btns.push(/*html*/ `<button class="next-btn">next</button>`);
	btns.unshift(/*html*/ `<button class="prev-btn">prev</button>`);
	btnContainer.innerHTML = btns.join('');
};

export default displayButtons;
