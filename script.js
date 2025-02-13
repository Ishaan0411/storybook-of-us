document.addEventListener("DOMContentLoaded", function () {
    const pages = document.querySelectorAll('.page');

    // Ensure each page is clickable and scrolls to the next one
    pages.forEach((page, index) => {
        page.addEventListener("click", function() {
            // Check if the current page is not the last one
            if (index < pages.length - 1) {
                pages[index + 1].scrollIntoView({ behavior: "smooth", block: "nearest" });
            } else {
                // If it's the last page, do nothing or trigger some action
                alert("You have reached the end of the story.");
            }
        });
    });
});
