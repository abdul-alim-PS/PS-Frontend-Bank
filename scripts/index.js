function validate(password){
    var alertText;
    if(!(password.length>=8 && password.length<=18)){
        alertText = "Input a password of length 8 to 18"
        return {alertText,isValid:false}
    }
    if (password === password.split('').reverse().join('')) {
        alertText = "Password cannot be a palindrome";
        return { alertText, isValid: false };
    }
    var repeatingCharsRegex = /(.)\1{2,}/;
    if (repeatingCharsRegex.test(password)) {
        alertText = "Password cannot have repeating characters";
        return { alertText, isValid: false };
    }

    var specialCharsRegex = /[!@#$%^&*(),.?":{}|<>]/;
    if (!specialCharsRegex.test(password)) {
        alertText = "Password must contain at least one special character";
        return { alertText, isValid: false };
    }
    var capitalLetterRegex = /[A-Z]/;
    if (!capitalLetterRegex.test(password)) {
        alertText = "Password must contain at least one capital letter";
        return { alertText, isValid: false };
    }
    return {isValid:true}
}
function validateRegistration() {
    var password = document.getElementById("registerPassword").value;
    var userName = document.getElementById("registerUsername").value;
    var email = document.getElementById("registerEmail").value;
    var validationResult = validate(password); 
    if(!validationResult.isValid){
       alert(validationResult.alertText);
       return false; 
    }
    return true;
}
function togglePassword(inputId) {
    var passwordInput = document.getElementById(inputId);
    var eyeIcon = document.querySelector(`[data-target="${inputId}"]`);
    var type = passwordInput.type === 'password' ? 'text' : 'password';
    passwordInput.type = type;

    eyeIcon.src = type === 'password' ? 'resources/view.png' : 'resources/hide.png';
}

document.addEventListener('DOMContentLoaded', function () {
    // Add event listeners for the buttons
    document.getElementById('loginBtn').addEventListener('click', function () {
        toggleForm('loginForm');
    });

    document.getElementById('registerBtn').addEventListener('click', function () {
        toggleForm('registerForm');
    });
});

function toggleForm(formId) {
    // Hide all forms
    document.getElementById('loginForm').classList.remove('active');
    document.getElementById('registerForm').classList.remove('active');

    // Display the selected form
    document.getElementById(formId).classList.add('active');
}