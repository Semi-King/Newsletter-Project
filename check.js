// Code to validate form
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("form-group");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const emailInput = document.getElementById("inputEmail");
    const emailValue = emailInput.value.trim();

    if (emailValue === "") {
      alert("Please enter an email address");
    }

    // My Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailValue)) {
        alert("Please enter a valid email address")
        return;
    }

    // Show thank you page once all validation passes 

  });
});
