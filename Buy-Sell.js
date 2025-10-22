// Handle Buy Button
document.getElementById("buyBtn").addEventListener("click", function() {
  localStorage.setItem("actionType", "buy");
  window.location.href = "buy.html"; // Redirect to buy page
});

// Handle Sell Button
document.getElementById("sellBtn").addEventListener("click", function() {
  localStorage.setItem("actionType", "sell");
  window.location.href = "sell.html"; // Redirect to sell page
});
