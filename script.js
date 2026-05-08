// This function runs when you click the button
function showMessage() {
  alert("Hello! Welcome to your website 🎉");
}

// Extra: change title when page loads
window.onload = function () {
  console.log("Website loaded successfully!");

  // Optional welcome message in console
  console.log("Hi Regina 👋 Your site is ready.");
};

// Extra: change text when button is clicked
document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector("button");
  const heading = document.querySelector("h1");

  button.addEventListener("click", function () {
    heading.innerText = "You clicked the button!";
    heading.style.color = "red";
  });
});