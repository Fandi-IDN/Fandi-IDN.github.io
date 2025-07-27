document.addEventListener('DOMContentLoaded', () => {
    // Select all navigation links
    const navLinks = document.querySelectorAll('nav ul li a');

    // Add click event listener to each navigation link
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            // Prevent default anchor link behavior (jumping)
            event.preventDefault();

            // Get the target section's ID from the href attribute
            const targetId = event.target.getAttribute('href').substring(1); // Remove the '#'
            const targetSection = document.getElementById(targetId);

            // Check if the target section exists
            if (targetSection) {
                // Scroll smoothly to the target section
                targetSection.scrollIntoView({
                    behavior: 'smooth' // Enable smooth scrolling
                });

                // Optional: For single-page applications, update the URL hash without a jump
                // history.pushState(null, null, `#${targetId}`);
            }
        });
    });

    // Handle contact form submission (client-side only, no backend)
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', async (event) => {
            event.preventDefault(); // Prevent default form submission

            formMessage.textContent = 'Sending message...';
            formMessage.className = 'mt-4 text-center text-sm text-gray-600';

            // Simulate a network request
            setTimeout(() => {
                // In a real application, you would send this data to a backend server
                // e.g., using fetch API:
                /*
                const formData = new FormData(contactForm);
                const data = Object.fromEntries(formData.entries());
                fetch('/your-backend-endpoint', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                })
                .then(response => response.json())
                .then(result => {
                    if (result.success) {
                        formMessage.textContent = 'Message sent successfully! I will get back to you soon.';
                        formMessage.className = 'mt-4 text-center text-sm text-green-600';
                        contactForm.reset(); // Clear the form
                    } else {
                        formMessage.textContent = 'Failed to send message. Please try again.';
                        formMessage.className = 'mt-4 text-center text-sm text-red-600';
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    formMessage.textContent = 'An error occurred. Please try again later.';
                    formMessage.className = 'mt-4 text-center text-sm text-red-600';
                });
                */

                // For now, just show a success message after a delay
                formMessage.textContent = 'Message sent successfully! I will get back to you soon.';
                formMessage.className = 'mt-4 text-center text-sm text-green-600';
                contactForm.reset(); // Clear the form
            }, 1500); // Simulate 1.5 second delay
        });
    }
});
