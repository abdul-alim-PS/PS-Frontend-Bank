let userDataString = localStorage.getItem('userData');
let userData = JSON.parse(userDataString);
if (userData == null) {
    userData = {
        username: "abdulalim",
        balance: 21300,
        lastTransaction: { date: '2023-12-13', amount: 500, type: 'credit' },
        transactionsHistory: [],
        id: 123456,
        holderName: "Abdul Alim",
        accountNo: 1234567890,
        profilePic: "https://i.postimg.cc/SxbYPS5c/userimg.webp"
    }
}

const validatePassword = (password) => {
    let alertText;
    if (!(password.length >= 8 && password.length <= 18)) {
        alertText = "Input a password of length 8 to 18"
        return { alertText, isValid: false }
    }
    if (password === password.split('').reverse().join('')) {
        alertText = "Password cannot be a palindrome";
        return { alertText, isValid: false };
    }
    let repeatingCharsRegex = /(.)\1{2,}/;
    if (repeatingCharsRegex.test(password)) {
        alertText = "Password cannot have repeating characters";
        return { alertText, isValid: false };
    }

    let specialCharsRegex = /[!@#$%^&*(),.?":{}|<>]/;
    if (!specialCharsRegex.test(password)) {
        alertText = "Password must contain at least one special character";
        return { alertText, isValid: false };
    }
    let capitalLetterRegex = /[A-Z]/;
    if (!capitalLetterRegex.test(password)) {
        alertText = "Password must contain at least one capital letter";
        return { alertText, isValid: false };
    }
    let lowerLetterRegex = /[a-z]/;
    if (!lowerLetterRegex.test(password)) {
        alertText = "Password must contain at least one lower case letter";
        return { alertText, isValid: false };
    }
    return { isValid: true }
}
const validateRegistration = () => {
    let password = document.getElementsByName("registerCreatePass")[0].value;
    let confirmPass = document.getElementsByName("registerConfirmPass")[0].value;

    let validationPass = validatePassword(password);
    if (!validationPass.isValid) {
        alert(validationPass.alertText);
    }

    else if (!password === confirmPass) {
        alert("Confirm Pass word didn't match.");
    }
    else {
        userData.holderName = document.getElementsByName("registerUserName")[0].value;
        userData.username = document.getElementsByName("registerUserName")[0].value;
        userData.balance = 0;
        userData.id += 1;
        userData.accountNo += 100;
        userData.lastTransaction = {};
        userData.transactionsHistory = [];
        let userDataString = JSON.stringify(userData);
        localStorage.setItem('userData', userDataString);
        window.location.href = "dashboard.html";
    }
}
const togglePassword = (inputName) => {
    var passwordInput = document.getElementsByName(inputName)[0];
    var eyeIcon = document.querySelector(`[data-target="${inputName}"]`);
    var type = passwordInput.type === 'password' ? 'text' : 'password';
    passwordInput.type = type;

    eyeIcon.src = type === 'password' ? 'resources/view.png' : 'resources/hide.png';
}

const validateLogin = () => {
    let password = document.getElementsByName("loginPassword")[0].value;
    let validationPass = validatePassword(password);
    if (!validationPass.isValid) {
        alert(validationPass.alertText);
    }
    else {
        userData = {
            username: "abdalim",
            balance: 21300,
            lastTransaction: { date: '2023-12-13', amount: 500, type: 'credit' },
            transactionsHistory: [
                { date: '2024-01-01', amount: 500, type: 'Credit' },
                { date: '2023-12-15', amount: 200, type: 'Debit' },
                { date: '2023-11-15', amount: 300, type: 'Debit' },
                { date: '2023-10-15', amount: 100, type: 'Debit' },
                { date: '2023-09-15', amount: 800, type: 'Debit' },
                { date: '2023-08-15', amount: 700, type: 'Debit' },
                { date: '2023-07-15', amount: 200, type: 'Debit' },
                { date: '2023-06-15', amount: 340, type: 'Debit' },
                { date: '2023-05-15', amount: 120, type: 'Debit' },
                { date: '2023-04-15', amount: 200, type: 'Debit' },
                { date: '2023-03-15', amount: 200, type: 'Debit' },
                { date: '2023-02-15', amount: 200, type: 'Debit' },
            ],
            id: 123456,
            holderName: "Jhon Doe",
            accountNo: 1234567890,
            profilePic: "https://i.postimg.cc/SxbYPS5c/userimg.webp"
        }
        userData.username = document.getElementsByName("loginUser")[0].value;
        let userDataString = JSON.stringify(userData);
        localStorage.setItem('userData', userDataString);
        window.location.href = "dashboard.html";
    }
}

const toggleForm = () => {
    const container = document.querySelector('.container');
    container.classList.toggle('active');
};