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
    const depositNumber = getInputNumber("depositAmount");
    updateSpanText("currentDeposit", depositNumber);
    updateSpanText("currentBalance", depositNumber);
    document.getElementById("depositAmount").value = "";   
})
function updateSpanText(id, depositNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const total = depositNumber + currentNumber;
    document.getElementById(id).innerText= total;
}

// withdraw event handler
const withdrawBtn = document.getElementById("withdrawBtn");
withdrawBtn.addEventListener("click", function () {
    const withdrawNumber = getInputNumber("withdrawAmount");
    updateSpanText("currentWithdraw", withdrawNumber); 
    updateSpanText("currentBalance", -1*withdrawNumber);
    document.getElementById("withdrawAmount").value = ""; 
})

function getInputNumber(id) {
    const withdrawAmount = document.getElementById(id).value;
    const withdrawAmountNumber = parseFloat(withdrawAmount);
    return withdrawAmountNumber
}