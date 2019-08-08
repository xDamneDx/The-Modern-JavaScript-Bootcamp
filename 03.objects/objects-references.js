let myAccount = {
    name: 'Vladimir Livinskiy',
    expenses: 0,
    income: 0
}

let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount;
}

addExpense(myAccount, 2.50);

console.log(myAccount);

// Challenge:

let addIncome = function (account, amount) {
    account.income += amount;
}

let getAccountSummary = function (account) {
    let accountBalance = account.income - account.expenses;
    return `Account for ${account.name} has $${accountBalance}. $${account.income} in income. $${account.expenses} in expenses.`
}

let resetAccount = function (account) {
    account.expenses = 0;
    account.income = 0;
}

addIncome(myAccount, 1000);
addExpense(myAccount, 75);
addExpense(myAccount, 13);
console.log(getAccountSummary(myAccount));
resetAccount(myAccount);
console.log(getAccountSummary(myAccount));
