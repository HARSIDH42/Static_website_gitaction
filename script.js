```javascript
// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    const feedbackForm = document.getElementById('feedbackForm');
    const feedbackNameInput = document.getElementById('feedbackName');
    const feedbackMessageInput = document.getElementById('feedbackMessage');
    const feedbackThanksMessage = document.getElementById('feedbackThanksMessage');

    // Proceed only if the feedback form exists on the page
    if (feedbackForm) {
        // Add an event listener for the form submission
        feedbackForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent the default form submission (page reload)

            // Get trimmed values from the form inputs
            const name = feedbackNameInput.value.trim();
            const message = feedbackMessageInput.value.trim();

            // Basic client-side validation for the message
            if (!message) {
                alert('Please enter your feedback message before submitting.');
                return; // Stop the function if message is empty
            }

            // Create a feedback data object
            const feedbackData = {
                id: Date.now(), // Unique ID based on current timestamp
                name: name || 'Anonymous', // Use 'Anonymous' if name is not provided
                message: message,
                timestamp: new new Date().toISOString() // ISO string for consistent date format
            };

            //