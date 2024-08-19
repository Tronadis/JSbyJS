// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
//    but it is being phased out. Use scrollY instead, for the same effect.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

// ********** close links ************
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function () {
	// linksContainer.classList.toggle('show-links'); // Works with height hardcoded in stylesheet; limited interest.
	const containerHeight = linksContainer.getBoundingClientRect().height;
	const linksHeight = links.getBoundingClientRect().height;
	if (containerHeight === 0) {
		linksContainer.style.height = `${linksHeight}px`;
	} else {
		linksContainer.style.height = `0px`;
	}
});

// ********** fixed navbar and back-to-top************
const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');

window.addEventListener('scroll', function () {
	// const scrollHeight = window.pageYOffset; // pageYOffset is a deprecated synonym of scrollY.
	const scrollHeight = window.scrollY; // the future.
	const navHeight = navbar.getBoundingClientRect().height;
	// fixed navbar
	if (scrollHeight > navHeight) {
		navbar.classList.add('fixed-nav');
	} else {
		navbar.classList.remove('fixed-nav');
	}
	// back-to-top link visibility
	if (scrollHeight > navHeight) {
		topLink.classList.add('show-link');
	} else {
		topLink.classList.remove('show-link');
	}
});

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(function (link) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const id = e.currentTarget.getAttribute('href').slice(1);
    const element = document.getElementById(id);

	const navHeight = navbar.getBoundingClientRect().height;
	const containerHeight = linksContainer.getBoundingClientRect().height;
	const fixedNav = navbar.classList.contains('fixed-nav');
    let position = element.offsetTop - navHeight; 
	console.log(`${fixedNav} ${position}`);
	if (!fixedNav) {
		position = position - navHeight;
	}
	if (navHeight > 82) {
		position = position + containerHeight;
	}
    window.scrollTo({
      left: 0, top: position,
    });
    linksContainer.style.height = 0; 
  });
});