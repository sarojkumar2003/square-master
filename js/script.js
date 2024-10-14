document
  .getElementById("quote-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data
    const templateParams = {
      first_name: document.getElementById("first_name").value,
      last_name: document.getElementById("last_name").value,
      subject: "Quote Request", // Set a static subject or get it from a field if needed
      service: document.getElementById("service").value,
      phone: document.getElementById("phone").value,
      email: document.getElementById("email").value, // New email field
      message: document.getElementById("message").value,
    };

    // Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with actual IDs from EmailJS
    emailjs.send("default_service", "template_752jqwf", templateParams).then(
      function (response) {
        alert("Your quote request has been sent successfully!");
      },
      function (error) {
        alert("Failed to send your request. Please try again.");
      }
    );
  });
