const Statement = require("./statement");
const Transaction = require("./transaction");

class BankAccount {
  constructor (openingBalance = 0, transactionClass = Transaction, statementClass = Statement) {
    this.openingBalance = openingBalance;
    this.transactionHistory = [];
    this.transactionClass = transactionClass;
    this.statementClass = statementClass;
  }

  printStatement() {
    let statementData = new this.statementClass(this.openingBalance, this.transactionHistory);
    return statementData.statement
  }

  currentBalance() {
    let currentBalance = this.openingBalance
    this.transactionHistory.forEach(transaction => {
      if(transaction.type === 'deposit'){
        currentBalance += transaction.amount;
      } else if (transaction.type === 'withdraw'){
        currentBalance -= transaction.amount;
      }
    })
    return currentBalance.toFixed(2)
  }

  addTransaction(transaction) {
    this.transactionHistory.push(transaction);
  }

  deposit(amount) {
    this.addTransaction(new this.transactionClass('deposit', amount));
  }

  withdraw(amount) {
    this.addTransaction(new this.transactionClass('withdraw', amount));
  }
}

module.exports = BankAccount;