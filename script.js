// Toggle between Sign In and Sign Up panels
const container = document.getElementById('container');
document.getElementById('register').addEventListener('click', () => {
    container.classList.add("active");
});
document.getElementById('login').addEventListener('click', () => {
    container.classList.remove("active");
});

// Handle social login buttons (mocked)
document.querySelectorAll('.social-icons a').forEach(icon => {
    icon.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Redirecting to social login...');
        window.location.href = 'main2.html'; // Simulate redirect after login
    });
});

// Handle email/password Sign In form submission
const signInForm = document.querySelector('.sign-in form');
signInForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = this.querySelector('input[type="email"]').value;
    const password = this.querySelector('input[type="password"]').value;

    if (email && password) {
        alert('Login successful!');
        window.location.href = 'main2.html';
    } else {
        alert('Please enter both email and password.');
    }
});

// Optional: Handle Sign Up form if needed in the future
const signUpForm = document.querySelector('.sign-up form');
signUpForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const password = this.querySelector('input[type="password"]').value;

    if (name && email && password) {
        alert('Account created successfully!');
        container.classList.remove("active");
    } else {
        alert('Please fill out all fields.');
    }
});
