const sidebar = document.querySelector('.sidebar');
const sidebarToggle = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');

sidebarToggle.addEventListener('click', function () {
	// sidebar.classList.add('show-sidebar');
	sidebar.classList.toggle('show-sidebar');
	console.log(sidebar.classList);
});

closeBtn.addEventListener('click', function () {
	sidebar.classList.remove('show-sidebar');
	console.log(sidebar.classList);
});

// Additional functionality, by fellow student Emre:
// close on click outside
window.addEventListener('click', function (e) {
	if (e.target.classList == '' && sidebar.classList.contains('show-sidebar')) {
		sidebar.classList.remove('show-sidebar');
	}
});
