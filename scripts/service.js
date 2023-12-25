import userData from "../resources/userData.js";
let storedUserDataString = localStorage.getItem('userData');
let storedUserData = JSON.parse(storedUserDataString);
if (storedUserData == null) {
    let userDataString = JSON.stringify(userData);
    localStorage.setItem('userData', userDataString);
    storedUserDataString = localStorage.getItem('userData');
    storedUserData = JSON.parse(storedUserDataString);
}
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("profilePic").src = storedUserData.profilePic;
    document.getElementById("userName").textContent = storedUserData.username;
    document.getElementById("balance").textContent = "Rs." + storedUserData.balance;
});
window.depositMoney = () => {
    let amount = parseInt(document.getElementById("depositAmount").value,10);
    storedUserData.balance += amount;

    storedUserData.lastTransaction = {
        date: getCurrentDate(),
        amount: amount,
        type: 'credit',
    };
    storedUserData.transactionsHistory.unshift({
        date: getCurrentDate(),
        amount: amount,
        type: 'credit',
    });
    let updatedUserDataString = JSON.stringify(storedUserData);
    localStorage.setItem('userData', updatedUserDataString);
    document.getElementById("balance").textContent = "Rs." + (storedUserData.balance);
    document.getElementById("deposit-form").reset();
}
window.withdrawMoney = () => {
    let amount = parseInt(document.getElementById("withdrawAmount").value, 10);
    if (amount <= storedUserData.balance) {
        storedUserData.lastTransaction = {
            date: getCurrentDate(),
            amount: amount,
            type: 'debit',
        };

        storedUserData.transactionsHistory.unshift({
            date: getCurrentDate(),
            amount: amount,
            type: 'debit',
        });
        storedUserData.balance -= amount;
        let updatedUserDataString = JSON.stringify(storedUserData);
        localStorage.setItem('userData', updatedUserDataString);
        document.getElementById("balance").textContent = "Rs." + (storedUserData.balance);
        document.getElementById("withdraw-form").reset();
    } else {
        alert('Insufficient balance for withdrawal.');
        document.getElementById("withdraw-form").reset();
    }
}

function getCurrentDate() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}
