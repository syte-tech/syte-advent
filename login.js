document.addEventListener("DOMContentLoaded", function() {
    if (window.location.pathname === "/map/sign-in") {
        const signInImage = document.querySelector('img[alt="sign in"]');
        if (signInImage) {
            // Replace the image with an input form
            const form = document.createElement("form");
            form.id = "redirect-form";
            form.innerHTML = `
                <label for="urlInput">Enter URL:</label>
                <input type="text" id="urlInput" name="urlInput" placeholder="Enter destination URL" required>
                <button type="submit">Submit</button>
            `;

            // Replace the image element with the form
            signInImage.replaceWith(form);

            // Add event listener to handle form submission
            form.addEventListener("submit", function (event) {
                event.preventDefault(); // Prevent default form submission
                const url = document.getElementById("urlInput").value;
                if (url) {
                    // Navigate to the entered URL
                    window.location.href = url;
                }
            });
        }
    }
});
