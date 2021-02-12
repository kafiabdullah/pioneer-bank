// login event handler
var loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function () {
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
})
// deposit event handler
const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function () {
    // const depositAmount = document.getElementById("depositAmount").value;
    // const depositNumber = parseFloat(depositAmount);
    const depositNumber = getInputNumber("depositAmount");

    // add deposit number verification
    if (depositNumber < 0) {
        alert("Deposit amount can't be Negative or Less than 0");
    }
    else {
        updateSpanText("currentDeposit", depositNumber);
        updateSpanText("currentBalance", depositNumber);

        document.getElementById("depositAmount").value = "";

    }

    //  const currentDeposit = document.getElementById("currentDeposit").innerText;
    //  const currentDepositNumber = parseFloat(currentDeposit);
    //  const totalDeposit = depositNumber + currentDepositNumber;
    //  console.log(totalDeposit);

    //add deposit amount
    //  document.getElementById("currentDeposit").innerText = totalDeposit;

    // total balance calculation

    // const currentBalance = document.getElementById("currentBalance").innerText;
    // const currentBalanceNumber = parseFloat(currentBalance);
    // const totalBalance = depositNumber + currentBalanceNumber;
    // document.getElementById("currentBalance").innerText = totalBalance;





})

//  withdraw calculation event handler
const withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click", function () {
    const withdrawNumber = getInputNumber("withdrawAmount");
    updateSpanText("currentWithdraw", withdrawNumber);
    updateSpanText("currentBalance", -1 * withdrawNumber);

    document.getElementById("withdrawAmount").value = "";
})

function getInputNumber(id) {
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;

}




// span calculation
function updateSpanText(id, depositNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = depositNumber + currentNumber;
    document.getElementById(id).innerText = totalAmount;
}

