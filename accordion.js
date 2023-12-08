document.addEventListener("DOMContentLoaded", () => {
    const accordionItems = document.querySelectorAll(".accordion-item");

    accordionItems.forEach(item => {
        const header = item.querySelector(".accordion-header");
        const content = item.querySelector(".accordion-content");
        const icon = header.querySelector('.icon i');

        header.addEventListener("click", () => {
            const isItemOpen = content.style.display === "block";

            accordionItems.forEach(item => {
                item.querySelector(".accordion-content").style.display = "none";
                item.classList.remove("open");
                item.querySelector('.icon i').classList.remove('fa-angle-down');
                item.querySelector('.icon i').classList.add('fa-angle-right');
            });

            if (!isItemOpen) {
                content.style.display = "block";
                item.classList.add("open");
                icon.classList.remove('fa-angle-right');
                icon.classList.add('fa-angle-down');
            }
        });
    });
});