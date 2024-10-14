// EmailJS Initialization (Optional)
(function () {
  emailjs.init("r1xhznwx3oOLcSO1I"); // Replace YOUR_USER_ID with your actual EmailJS user ID
})();

// Quote Form Handler
document
  .getElementById("quote-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Gather form data from Quote Form
    const quoteData = {
      first_name: this.first_name.value,
      last_name: this.last_name.value,
      email: this.email.value,
      service: this.service.value,
      phone: this.phone.value,
      message: this.message.value,
    };

    // Send Quote Form data via EmailJS
    emailjs.send("service_16uhmz9", "template_752jqwf", quoteData).then(
      function (response) {
        console.log("Quote form sent successfully", response);
        document.getElementById("quote-form").reset(); // Reset form after successful submission
        alert("Your quote request has been sent!");
      },
      function (error) {
        console.error("Quote form send failed", error);
        alert("Failed to send quote request. Please try again.");
      }
    );
  });

  
// Contact Form Handler
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Gather form data from Contact Form
    const contactData = {
        first_name: this.first_name.value,
        last_name: this.last_name.value,
        email: this.email.value,
        subject: this.subject.value, // Added Subject Field
        service: this.service.value,
        phone: this.phone.value,
        message: this.message.value
    };

    // Send Contact Form data via EmailJS
    emailjs.send("service_lajgc4s", "template_99v9m79", contactData)
        .then(function(response) {
            console.log("Contact form sent successfully", response);
            document.getElementById("contact-form").reset(); // Reset form after successful submission
            alert("Your message has been sent!");
        }, function(error) {
            console.error("Contact form send failed", error);
            alert("Failed to send message. Please try again.");
        });
});

console.log("Form handlers loaded");