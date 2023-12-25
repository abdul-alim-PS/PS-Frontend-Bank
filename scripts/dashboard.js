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
    document.getElementById("accountNumber").textContent = storedUserData.accountNo.toString();
    const logOutLink = document.getElementById('logOutLink');
    logOutLink.addEventListener('click', onLogOut);

    if (storedUserData.lastTransaction.type == null) {
        document.getElementById("lastTransaction").textContent = "Just Created Account";
    }
    else if(storedUserData.lastTransaction.type === 'credit') {
        document.getElementById("lastTransaction").textContent = storedUserData.lastTransaction.amount + " Cr";
    }
    else{
        document.getElementById("lastTransaction").textContent = storedUserData.lastTransaction.amount + " Db";
    }
    addRowsToTable(storedUserData.transactionsHistory);

});
function addRowsToTable(data) {
    const tableBody = document.getElementById('transactionsTbody');

    for (let i = 0; i < Math.min(5, data.length); i++) {
        const item = data[i];
        const row = document.createElement('tr');

        const dateCell = document.createElement('td');
        dateCell.textContent = item.date;
        row.appendChild(dateCell);

        const rupeesCell = document.createElement('td');
        rupeesCell.textContent = item.amount;
        row.appendChild(rupeesCell);

        const typeCell = document.createElement('td');
        typeCell.textContent = item.type;
        row.appendChild(typeCell);
        tableBody.appendChild(row);
    };
}

function onLogOut(){
    localStorage.clear();
    window.location.href = 'index.html';
}
