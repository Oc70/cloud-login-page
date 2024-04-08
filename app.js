const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const signInForm = document.querySelector(".sign-in-form");
const signUpForm = document.querySelector(".sign-up-form");

// Function to validate the username and password fields
function validateUsernameAndPassword(username, password) {
    // Check if username or password fields are empty
    if (!username || !password) {
        alert("Username and password are required.");
        return false;
    }

    // Check if the password meets the criteria (more than 8 characters with upper and lower case letters and numbers)
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if (!passwordRegex.test(password)) {
        alert("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.");
        return false;
    }

    // If all checks pass, return true to indicate valid input
    return true;
}

// Event listener for sign up form submission
signUpForm.addEventListener('submit', (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the username and password input values
    const username = signUpForm.querySelector('input[type="text"]').value;
    const password = signUpForm.querySelector('input[type="password"]').value;

    // Validate the username and password
    if (validateUsernameAndPassword(username, password)) {
        // If validation succeeds, proceed with form submission
        signUpForm.submit();
    }
});

// Event listener for sign in form submission
signInForm.addEventListener('submit', (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the username and password input values
    const username = signInForm.querySelector('input[type="text"]').value;
    const password = signInForm.querySelector('input[type="password"]').value;

    // Validate the username and password
    if (validateUsernameAndPassword(username, password)) {
        // If validation succeeds, proceed with form submission
        signInForm.submit();
    }
});

// Event listeners to toggle between sign-in and sign-up modes
sign_up_btn.addEventListener('click', () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener('click', () => {
    container.classList.remove("sign-up-mode");
});
