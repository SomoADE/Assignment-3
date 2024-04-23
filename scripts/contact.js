//Author: Saheed lawal
//Date: 22-04-2024
//Deploymeent to Github 

// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.
document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.getElementById("submit-button");
    const contactPage = document.getElementById("contact-page");

    function handleFormSubmission(event) {
        // Prevent default form submission behavior
        event.preventDefault(); 
        contactPage.innerHTML = '<p style="font-size: 24px;">Thank you for your message</p>';
    }

    // Add event listener to submit button
    submitButton.addEventListener("click", handleFormSubmission);
});



// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.
document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.getElementById("submit-button");
    const contactPage = document.getElementById("contact-page");

    // Function to handle form submission
    function handleFormSubmission(event) {
        // Prevent default form submission behavior
        event.preventDefault(); 
        contactPage.innerHTML = '<p>Thank you for your message</p>';
        contactPage.style.fontSize = "24px"; 
    }

    // Add event listener to submit button
    submitButton.addEventListener("click", handleFormSubmission);
});

