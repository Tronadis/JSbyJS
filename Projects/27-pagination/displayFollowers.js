const container = document.querySelector('.container');

const display = (followers) => {
	const users = followers
		.map((person) => {
			const { login, html_url, avatar_url } = person;
			return /* html */ `
        <article class="card">
            <img src="${avatar_url}" alt="${login}">
            <h4>${login}</h4>
            <a href="${html_url}" class="btn">view profile</a>
        </article>`;
		})
		.join('');
	container.innerHTML = users;
};

export default display;
