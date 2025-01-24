// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Simple Form Validation for Contact Form
const form = document.querySelector('form');
form.addEventListener('submit', function (event) {
    const name = form.querySelector('input[name="name"]');
    const email = form.querySelector('input[name="email"]');
    const message = form.querySelector('textarea[name="message"]');

    let valid = true;

    // Validate Name
    if (name.value.trim() === '') {
        valid = false;
        alert('Please enter your name.');
    }

    // Validate Email
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email.value.trim() === '' || !emailPattern.test(email.value)) {
        valid = false;
        alert('Please enter a valid email address.');
    }

    // Validate Message
    if (message.value.trim() === '') {
        valid = false;
        alert('Please enter a message.');
    }

    // If the form is not valid, prevent it from submitting
    if (!valid) {
        event.preventDefault();
    }
});

// Scroll to Top Button (Optional feature to add a button to scroll back to top)
const scrollTopBtn = document.createElement('button');
scrollTopBtn.textContent = "↑";
scrollTopBtn.classList.add('scroll-top-btn');
document.body.appendChild(scrollTopBtn);

// Scroll event to show/hide button
window.addEventListener('scroll', function () {
    if (window.scrollY > 200) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});

// Scroll to top when the button is clicked
scrollTopBtn.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
