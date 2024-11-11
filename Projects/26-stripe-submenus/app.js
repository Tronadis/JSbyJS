console.log('stripe submenus');

import sublinks from './data.js';

const toggleBtn = document.querySelector('.toggle-btn');
const closeBtn = document.querySelector('.close-btn');
const sidebarWrapper = document.querySelector('.sidebar-wrapper');
const sidebarLinks = document.querySelector('.sidebar-links');
const linkBtns = [...document.querySelectorAll('.link-btn')];
const submenu = document.querySelector('.submenu');
const hero = document.querySelector('.hero');
const nav = document.querySelector('.nav');

toggleBtn.addEventListener('click', () => {
	sidebarWrapper.classList.toggle('show');
});
closeBtn.addEventListener('click', () => {
	sidebarWrapper.classList.remove('show');
});

sidebarLinks.innerHTML = sublinks
	.map((item) => {
		const { page, links } = item;
		return /* html */ `<article>
			<h4>${page}</h4>
			<div class="sidebar-sublinks">
				${links.map((link) => /* html */ `<a href="${link.url}"><i class="${link.icon}"></i>${link.label}</a>`).join('')}
			</div>
		</article>`;
	})
	.join('');

linkBtns.forEach((btn) => {
	btn.addEventListener('mouseover', function (e) {
		const text = e.currentTarget.textContent;
		const tempBtn = e.currentTarget.getBoundingClientRect();
		const center = (tempBtn.left + tempBtn.right) / 2;
		const bottom = tempBtn.bottom - 3;
		const tempPage = sublinks.find(({ page }) => page === text);
		if (tempPage) {
			const { page, links } = tempPage;
			submenu.style.left = `${center}px`;
			submenu.style.top = `${bottom}px`;

			/* let columns = 'col-2';
			if (links.length === 3) columns = 'col-3';
			if (links.length > 3) columns = 'col-4'; */
			// Or, cleaner:
			let columns = `col-${links.length}`;
			if (links.length > 4) columns = 'col-4';

			submenu.innerHTML = /* html */ `
				<section>
					<h4>${page}</h4>
					<div class="submenu-center ${columns}">
						${links.map((link) => /* html */ `<a href="${link.url}"><i class="${link.icon}"></i>${link.label}</a>`).join('')}
					</div>
				</section>`;
			submenu.classList.add('show');
		} // But do not show if no data attached to target
	});
});
hero.addEventListener('mouseover', function (e) {
	submenu.classList.remove('show');
});
nav.addEventListener('mouseover', function (e) {
	if (!e.target.classList.contains('link-btn')) {
		submenu.classList.remove('show');
	}
});
