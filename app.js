// button login button handler
const loginArea = document.getElementById("login").addEventListener("click", function () {
    const loginArea = document.getElementById("login-area");
    loginArea.style.display="none";
    transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display="block";
})

// deposit event handler

const depositBtn = document.getElementById("add-deposit");
depositBtn.addEventListener("click", function () {
    const depositAmount = document.getElementById("depositAmount").value;
    const depositNumber = parseFloat(depositAmount);

function updateSpanText(id, depositNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const total = depositNumber + currentNumber;
    document.getElementById(id).innerText= total;
}
    updateSpanText("currentDeposit", depositNumber);
    updateSpanText("currentBalance", depositNumber);
    document.getElementById("depositAmount").value = ""; 
    
})

