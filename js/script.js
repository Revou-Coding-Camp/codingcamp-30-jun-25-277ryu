document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const nameInput = document.getElementById("name");
  const messageInput = document.getElementById("message");
  const successMessage = document.getElementById("success-message");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let isValid = true;

    // Name validation
    if (nameInput.value.trim().length < 2) {
      showError(nameInput, "Name must be at least 2 characters.");
      isValid = false;
    } else {
      clearError(nameInput);
    }

    // Message validation
    if (messageInput.value.trim().length < 10) {
      showError(messageInput, "Message must be at least 10 characters.");
      isValid = false;
    } else {
      clearError(messageInput);
    }

    if (isValid) {
      successMessage.textContent = "Thanks for your message! 🚀";
      form.reset();
      setTimeout(() => {
        successMessage.textContent = "";
      }, 5000);
    }
  });

  function showError(input, message) {
    const small = input.nextElementSibling;
    small.textContent = message;
    small.style.display = "block";
    input.style.borderColor = "#ff5e5e";
  }

  function clearError(input) {
    const small = input.nextElementSibling;
    small.textContent = "";
    small.style.display = "none";
    input.style.borderColor = "";
  }
});