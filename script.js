document.getElementById('signUpForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    document.getElementById('thankYouMessage').style.display = 'block'; // Show thank you message
});