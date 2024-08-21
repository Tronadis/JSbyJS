const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".content");

about.addEventListener("click", function (e) {
    const id = e.target.dataset.id;
    if (id) {
        btns.forEach(function (btn) {
            btn.classList.remove("active");
            e.target.classList.add("active");
        });
        contents.forEach(function (content) {
            content.classList.remove("active");
            const targetedContent = document.getElementById(id);
            targetedContent.classList.add("active");
        })
    }
});
