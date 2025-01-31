document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const signUpForm = document.getElementById("signUpForm");
    const showSignUp = document.getElementById("showSignUp");
    const showSignIn = document.getElementById("showSignIn");

    showSignUp.addEventListener("click", function(event) {
        event.preventDefault();
        loginForm.classList.add("d-none");
        signUpForm.classList.remove("d-none");
    });

    showSignIn.addEventListener("click", function(event) {
        event.preventDefault();
        signUpForm.classList.add("d-none");
        loginForm.classList.remove("d-none");
    });

    // Basit Form Kontrolleri
    document.getElementById("signInForm").addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Login Successful!");
    });

    document.getElementById("signUp").addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Sign Up Successful! You can now log in.");
        signUpForm.classList.add("d-none");
        loginForm.classList.remove("d-none");
    });
});