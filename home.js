document.addEventListener("DOMContentLoaded", function () {
    let userType = localStorage.getItem("userType") || "buyer"; // Default to buyer

    document.querySelectorAll(".category").forEach(category => {
        category.addEventListener("click", function () {
            let categoryName = this.querySelector("p").textContent.trim().toLowerCase();

            let pageMap = {
                "vegetables": userType === "seller" ? "sellerinfo.html" : "vegestore.html",
                "fruits": userType === "seller" ? "sellerinfo.html" : "Fruitstore.html",
                "groceries": userType === "seller" ? "sellerinfo.html" : "Groceriesstore.html",
                "dairy products": userType === "seller" ? "sellerinfo.html" : "Diarystore.html"
            };

            if (pageMap[categoryName]) {
                window.location.href = pageMap[categoryName]; // Redirect to the correct page
            }
        });
    });
});
