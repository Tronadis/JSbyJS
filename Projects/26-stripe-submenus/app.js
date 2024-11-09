console.log('stripe submenus');

import sublinks from './data.js';

const toggleBtn = document.querySelector('.toggle-btn');
const closeBtn = document.querySelector('.close-btn');
const sidebarWrapper = document.querySelector('.sidebar-wrapper');
const sidebarLinks = document.querySelector('.sidebar-links');
// const linkBtns = [...document.querySelectorAll('.link-btn')];
// const submenu = document.querySelector('.submenu');
// const hero = document.querySelector('.hero');
// const nav = document.querySelector('.nav');

toggleBtn.addEventListener('click', () => {
	sidebarWrapper.classList.toggle('show');
});
closeBtn.addEventListener('click', () => {
	sidebarWrapper.classList.remove('show');
});

sidebarLinks.innerHTML = sublinks
	.map((item) => {
		const { page, links } = item;
		return `
            <article>
				<h4>${page}</h4>
				<div class="sidebar-sublinks">${links
					.map(
						(link) =>
							`<a href="${link.url}">
                                <i class="${link.icon}"></i>${link.label}
                            </a>`
					)
					.join('')}</div>
			</article>`;
	})
	.join('');
