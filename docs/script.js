// Wait until the DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
  // Get the form element that contains the email input (id="info-email-form")
  const form = document.getElementById("info-email-form");

  // Get the email input element whose value we'll validate (id="verify-email")
  const emailInput = document.getElementById("verify-email");

  // Get the element used to display an error message on invalid email (id="email-error")
  const errorMsg = document.getElementById("email-error");

  // Get the wrapper that holds the post-validation content to reveal (class=".info-content-wrapper")
  const infoContent = document.querySelector(".info-content-wrapper");

  // Email regex used to test the user-entered address
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@\"]+(\.[^<>()\[\]\\.,;:\s@\"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // Attach a submit handler to the form to validate the email and toggle UI
  form.addEventListener("submit", (e) => {
    // Prevent the browser from performing the default form submission/navigation
    e.preventDefault();

    // Read the current value of the email input and remove surrounding whitespace
    const value = emailInput.value.trim();

    // If the email doesn't match the regex, show the error element and stop further processing
    if (!emailRegex.test(value)) {
      errorMsg.style.display = "block"; // make the error message visible
      return; // exit the handler without revealing info
    }

    // If we reached here, the email is valid: hide the error message element
    errorMsg.style.display = "none";

    // Hide the email form by adding the class that your CSS uses to hide it
    form.classList.add("info-content-hidden");

    // Reveal the info content by removing the class that hides it
    infoContent.classList.remove("info-content-hidden");
  });

  // Select all section titles inside the background grid that should toggle content
  const toggleSections = document.querySelectorAll(
    ".background-grid .toggle-section"
  );

  // For each toggle title, attach a click listener that toggles the adjacent content area
  toggleSections.forEach((title) =>
    title.addEventListener("click", () => {
      // Find the element immediately after the title — this should be the content block
      const content = title.nextElementSibling;

      // If the next sibling exists and has the expected content class, toggle visibility
      if (content && content.classList.contains("toggle-content")) {
        // Toggle the class that hides/shows the content (CSS controls the visual)
        content.classList.toggle("toggle-content-hidden");

        // Toggle the spacing class on the title so CSS can adjust title spacing when open/closed
        title.classList.toggle("toggle-title-spacing");
      }
    })
  );
});
