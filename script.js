const container = document.getElementsById('container');
const registraterBtn = document. getElementsById('register');
const loginBtn = document.getElementById('login');

registraterBtn.addEventListener('click', () => {
    container.classList.add("activate");
});

loginBtn.addEventListener('click', () =>{
    container.classList.remove("active");
} );

document.addEventListener("DOMContentLoaded", () => {
    const signInButton = document.querySelector("form.sign-in button");
  
    if (signInButton) {
      signInButton.addEventListener("click", (e) => {
        e.preventDefault(); // Prevent default form submission
  
        // Simple example: validate inputs here
        const email = document.querySelector('form.sign-in input[type="email"]').value;
        const password = document.querySelector('form.sign-in input[type="password"]').value;
  
        if (email === "test@example.com" && password === "123456") {
            window.location.href = "main.html";

          //window.location.href = "main.html"; // Replace with your main page path
          // window.location.href = "http://127.0.0.1:5500/main.html";

        } else {
          alert("Invalid login credentials.");
        }
      });
    }
  });
  

