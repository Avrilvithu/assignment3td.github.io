// Wait until the DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
  // ----- EMAIL VERIFICATION SECTION -----
  // Fetch relevant elements from the DOM
  const form = document.getElementById("info-email-form");
  const emailInput = document.getElementById("verify-email");
  const errorMsg = document.getElementById("email-error");
  const infoContent = document.querySelector(".info-content-wrapper");

  // Regular expression to validate email format
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@\"]+(\.[^<>()\[\]\\.,;:\s@\"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // This function will run when the submit button is clicked
  form.addEventListener("submit", (e) => {
    // Prevent the browser from reloading the page when the form is submitted
    e.preventDefault();

    // Read the current value of the email input and remove surrounding spaces
    const value = emailInput.value.trim();

    // If the email doesn't match the regex, show the error element and stop the code from running further
    if (!emailRegex.test(value)) {
      errorMsg.style.display = "block";
      return;
    }

    // The email is valid. Hide the error message element and the email form
    errorMsg.style.display = "none";
    form.classList.add("info-content-hidden");

    // Show the info content
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
