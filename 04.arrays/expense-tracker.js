const account = {
    name: 'Vladimir',
    expenses: [],
    incomes: [],
    addExpense: function (description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        });
    },
    addIncome: function (description, amount) {
        this.incomes.push({
            description: description,
            amount: amount
        });
    },
    totalAccountSummary: function () {
        let totalExpenses = 0;
        let totalIncomes = 0;
        this.expenses.forEach(function (expense) {
            totalExpenses += expense.amount;
        });
        this.incomes.forEach(function (income) {
            totalIncomes += income.amount;
        });
        const balance = totalIncomes - totalExpenses;
        return `${this.name} has a balance of $${balance}. $${totalIncomes} in income. $${totalExpenses} in expenses.`;
    }
};

account.addIncome('Some income', 300)
account.addExpense('First expense', 100);
account.addExpense('Second expense', 13);

console.log(account.totalAccountSummary());
