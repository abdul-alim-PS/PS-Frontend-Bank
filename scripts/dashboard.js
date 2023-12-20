const userData = {
    username: "abdalim",
    balance: 2300,
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
    profilePic:"https://i.postimg.cc/SxbYPS5c/userimg.webp"
};
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("profilePic").src = userData.profilePic;
    document.getElementById("userName").textContent = userData.username;
    document.getElementById("balance").textContent = "Rs." + userData.balance;
    document.getElementById("accountNumber").textContent = userData.accountNo.toString();
    if (userData.lastTransaction.type === 'credit') {
        document.getElementById("lastTransaction").textContent = userData.lastTransaction.amount + " CR";
    }
    else {
        document.getElementById("lastTransaction").textContent = userData.lastTransaction.amount + " DB";
    }
    addRowsToTable(userData.transactionsHistory);

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
