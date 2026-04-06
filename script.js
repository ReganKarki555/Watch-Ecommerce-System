const cartButton = document.getElementById("cart-btn");
const searchButton = document.getElementById("search-btn");

if (cartButton) {
	cartButton.addEventListener("click", () => {
		alert("Cart clicked");
	});
}

if (searchButton) {
	searchButton.addEventListener("click", () => {
		alert("Search clicked");
	});
}
