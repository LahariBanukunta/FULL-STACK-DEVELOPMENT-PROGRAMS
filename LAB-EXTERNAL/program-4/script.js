function validateForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const dob = document.getElementById('dob').value;
    const contact = document.getElementById('contact').value;
    const email = document.getElementById('email').value;
    const errorMessage = document.getElementById('errorMessage');
    const successMessage = document.getElementById('successMessage');

    // Clear previous messages
    errorMessage.style.display = 'none';
    successMessage.style.display = 'none';

    // Username validation
    const usernamePattern = /^[a-zA-Z][a-zA-Z0-9]{7,15}$/;
    if (!usernamePattern.test(username)) {
        errorMessage.textContent = 'Username must be 8-16 characters long, start with a letter, and contain only letters and numbers.';
        errorMessage.style.display = 'block';
        return false;
    }

    // Password validation
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=^[^@$#]*[@$#][^@$#]*$)[A-Za-z\d@$#]{8,16}$/;
    if (!passwordPattern.test(password)) {
        errorMessage.textContent = 'Password must be 8-16 characters long, contain at least one letter, one number, and exactly one special character (@, $, or #).';
        errorMessage.style.display = 'block';
        return false;
    }

    // Date of Birth validation
    const dobPattern = /^\d{2}-\d{2}-\d{4}$/;
    if (!dobPattern.test(dob)) {
        errorMessage.textContent = 'Date of Birth must be in the format dd-mm-yyyy.';
        errorMessage.style.display = 'block';
        return false;
    }

    // Contact Number validation
    const contactPattern = /^\d+$/;
    if (!contactPattern.test(contact)) {
        errorMessage.textContent = 'Contact number must contain numbers only.';
        errorMessage.style.display = 'block';
        return false;
    }

    // Email validation
    const emailPattern = /^[a-zA-Z\d]+@(gmail|hotmail|rediffmail)\.com$/;
    if (!emailPattern.test(email)) {
        errorMessage.textContent = 'Email must be in the format: user@gmail.com, user@hotmail.com, or user@rediffmail.com.';
        errorMessage.style.display = 'block';
        return false;
    }

    // If all validations pass
    successMessage.style.display = 'block';
    return true;
}
