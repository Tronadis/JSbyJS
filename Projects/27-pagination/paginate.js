const paginate = (followers) => {
	const itemsPerPage = 12;
	const numberOfPages = Math.ceil(followers.length / itemsPerPage);
	const paginatedFollowers = Array.from({ length: numberOfPages }, (_, index) => {
		const start = index * itemsPerPage;
		return followers.slice(start, start + itemsPerPage);
	});
	return paginatedFollowers;
};

export default paginate;
