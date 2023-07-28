// script.js

// Add any client-side JavaScript code here for interactivity and dynamic behavior
// For example, you can use JavaScript to handle form submissions, make AJAX requests, or perform DOM manipulation.

// Example: Handling form submission for medal prediction
const medalPredictionForm = document.querySelector('#medalPredictionForm');

if (medalPredictionForm) {
    medalPredictionForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        
        const formData = new FormData(event.target);
        const eventId = formData.get('event_id');

        try {
            const response = await fetch('/predict_medal', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                const predictionData = await response.json();
                // Display the prediction data on the page or perform any other action
            } else {
                // Handle error cases
                console.error('Failed to fetch medal prediction.');
            }
        } catch (error) {
            console.error('An error occurred during the request.', error);
        }
    });
}

// Add more JavaScript code for additional functionalities
