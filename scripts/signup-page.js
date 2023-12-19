function validatePassword(password){
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
    var lowerLetterRegex = /[a-z]/;
    if (!lowerLetterRegex.test(password)) {
        alertText = "Password must contain at least one lower case letter";
        return { alertText, isValid: false };
    }
    return {isValid:true}
}
const validateRegistration=()=> {
    let password = document.getElementsByName("registerCreatePass")[0];
    let confirmPass = document.getElementsByName("registerConfirmPass")[0];

    let validationPass = validatePassword(password); 
    if(!validationPass.isValid){
       alert(validationPass.alertText);
    }

    if(!password===confirmPass){
        alert("Confirm Pass word didn't match.");
    }
}
function togglePassword(inputName) {
    var passwordInput = document.getElementsByName(inputName)[0];
    var eyeIcon = document.querySelector(`[data-target="${inputName}"]`);
    var type = passwordInput.type === 'password' ? 'text' : 'password';
    passwordInput.type = type;

    eyeIcon.src = type === 'password' ? 'resources/view.png' : 'resources/hide.png';
}

const validateLogin=() => {
    let password = document.getElementsByName("loginPassword")[0];
    let validationPass = validatePassword(password); 
    if(!validationPass.isValid){
       alert(validationPass.alertText);
    }
}

const toggleForm = () => {
    const container = document.querySelector('.container');
    container.classList.toggle('active');
  };