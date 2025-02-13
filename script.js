let currentPage = 1;
let totalPages = 5;

function flipPage() {
    if (currentPage <= totalPages) {
        let currentPageElement = document.getElementById(`page${currentPage}`);
        currentPageElement.classList.add("show");
        currentPage++;
    }

    if (currentPage > totalPages) {
        document.getElementById('final-page').classList.add("show");
    }
}

// Make sure the first page appears on load
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("page1").classList.add("show");
});

// Flip pages on click
document.addEventListener("click", flipPage);
