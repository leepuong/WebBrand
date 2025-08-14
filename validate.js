// Validation functions for login and registration forms

// Email validation function
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Password validation function
function validatePassword(password) {
    // Password must be at least 8 characters long and contain at least one uppercase, one lowercase, one number, and one special character
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
}

// Show error message function
function showError(element, message) {
    // Remove existing error message
    const existingError = element.parentNode.parentNode.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }

    // Add error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.style.color = '#ff4444';
    errorDiv.style.fontSize = '12px';
    errorDiv.style.marginTop = '0px';
    errorDiv.textContent = message;

    element.parentNode.parentNode.appendChild(errorDiv);
    element.style.borderColor = '#ff4444';
}

// Remove error message function
function removeError(element) {
    const existingError = element.parentNode.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    element.style.borderColor = '';
}

// Real-time email validation
function validateEmailRealTime(input) {
    const email = input.value.trim();

    if (email === '') {
        showError(input, 'Email is required');
        return false;
    } else if (!validateEmail(email)) {
        showError(input, 'Please enter a valid email address');
        return false;
    } else {
        removeError(input);
        return true;
    }
}

// Real-time password validation
function validatePasswordRealTime(input) {
    const password = input.value;

    if (password === '') {
        showError(input, 'Password is required');
        return false;
    } else if (password.length < 8) {
        showError(input, 'Password must be at least 8 characters long');
        return false;
    } else if (!validatePassword(password)) {
        showError(input, 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character');
        return false;
    } else {
        removeError(input);
        return true;
    }
}

// Confirm password validation
function validateConfirmPassword(passwordInput, confirmPasswordInput) {
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (confirmPassword === '') {
        showError(confirmPasswordInput, 'Please confirm your password');
        return false;
    } else if (password !== confirmPassword) {
        showError(confirmPasswordInput, 'Passwords do not match');
        return false;
    } else {
        removeError(confirmPasswordInput);
        return true;
    }
}

// Login form validation
function validateLoginForm() {
    const emailInput = document.querySelector('input[type="email"]');
    const passwordInput = document.getElementById('passwordInput');

    if (!emailInput || !passwordInput) {
        console.error('Login form elements not found');
        return false;
    }

    const isEmailValid = validateEmailRealTime(emailInput);
    const isPasswordValid = validatePasswordRealTime(passwordInput);

    if (isEmailValid && isPasswordValid) {
        // If validation passes, redirect to home page
        window.location.href = './homePage.html';
        return true;
    } else {
        return false;
    }
}

// Registration form validation
function validateRegistrationForm() {
    const emailInput = document.querySelector('input[type="email"]');
    const passwordInput1 = document.getElementById('passwordInput1');
    const passwordInput2 = document.getElementById('passwordInput2');

    if (!emailInput || !passwordInput1 || !passwordInput2) {
        console.error('Registration form elements not found');
        return false;
    }

    const isEmailValid = validateEmailRealTime(emailInput);
    const isPasswordValid = validatePasswordRealTime(passwordInput1);
    const isConfirmPasswordValid = validateConfirmPassword(passwordInput1, passwordInput2);

    if (isEmailValid && isPasswordValid && isConfirmPasswordValid) {
        // If validation passes, redirect to home page
        window.location.href = './homePage.html';
        return true;
    } else {
        return false;
    }
}

// Initialize validation for login form (index.html)
function initLoginValidation() {
    const emailInput = document.querySelector('input[type="email"]');
    const passwordInput = document.getElementById('passwordInput');
    const loginButton = document.querySelector('.btnlogin');

    if (emailInput && passwordInput && loginButton) {
        // Add event listeners for real-time validation
        emailInput.addEventListener('blur', () => validateEmailRealTime(emailInput));
        emailInput.addEventListener('input', () => {
            if (emailInput.parentNode.querySelector('.error-message')) {
                validateEmailRealTime(emailInput);
            }
        });

        passwordInput.addEventListener('blur', () => validatePasswordRealTime(passwordInput));
        passwordInput.addEventListener('input', () => {
            if (passwordInput.parentNode.querySelector('.error-message')) {
                validatePasswordRealTime(passwordInput);
            }
        });

        // Override the login button click event
        loginButton.onclick = function(e) {
            e.preventDefault();
            validateLoginForm();
        };
    }
}

// Initialize validation for registration form (register.html)
function initRegistrationValidation() {
    const emailInput = document.querySelector('input[type="email"]');
    const passwordInput1 = document.getElementById('passwordInput1');
    const passwordInput2 = document.getElementById('passwordInput2');
    const signupButton = document.querySelector('.btnlogin');

    if (emailInput && passwordInput1 && passwordInput2 && signupButton) {
        // Add event listeners for real-time validation
        emailInput.addEventListener('blur', () => validateEmailRealTime(emailInput));
        emailInput.addEventListener('input', () => {
            if (emailInput.parentNode.querySelector('.error-message')) {
                validateEmailRealTime(emailInput);
            }
        });

        passwordInput1.addEventListener('blur', () => validatePasswordRealTime(passwordInput1));
        passwordInput1.addEventListener('input', () => {
            if (passwordInput1.parentNode.querySelector('.error-message')) {
                validatePasswordRealTime(passwordInput1);
            }
        });

        passwordInput2.addEventListener('blur', () => validateConfirmPassword(passwordInput1, passwordInput2));
        passwordInput2.addEventListener('input', () => {
            if (passwordInput2.parentNode.querySelector('.error-message')) {
                validateConfirmPassword(passwordInput1, passwordInput2);
            }
        });

        // Override the signup button click event
        signupButton.onclick = function(e) {
            e.preventDefault();
            validateRegistrationForm();
        };
    }
}

// Auto-detect which page we're on and initialize appropriate validation
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on the login page (index.html)
    if (document.querySelector('.btnlogin') && document.getElementById('passwordInput')) {
        initLoginValidation();
    }

    // Check if we're on the registration page (register.html)
    if (document.querySelector('.btnlogin') && document.getElementById('passwordInput1') && document.getElementById('passwordInput2')) {
        initRegistrationValidation();
    }
});