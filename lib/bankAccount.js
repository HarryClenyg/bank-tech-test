const History = require("./transactionHistory");
const Transaction = require("./transaction");

class BankAccount {
  constructor (openingBalance = 0, transactionClass = Transaction) {
    this.statement = 'date || credit || debit || balance';
    this.openingBalance = openingBalance;
    this.history = new History;
    this.transactionClass = transactionClass;
  }

  currentBalance() {
    let currentBalance = this.openingBalance
    this.history.transactions.forEach(transaction => {
      if(transaction.type === 'deposit'){
        currentBalance += transaction.amount;
      } else if (transaction.type === 'withdraw'){
        currentBalance -= transaction.amount;
      }
    })
    return currentBalance.toFixed(2)
  }

  printStatement() {
    let balance = this.openingBalance
    this.history.transactions.forEach(transaction => {
      if(transaction.type === 'deposit'){
        this.statement += `\n${transaction.date} || ${transaction.amount.toFixed(2)} ||  || ${(balance += transaction.amount).toFixed(2)}`;
      } else if (transaction.type === 'withdraw'){
        this.statement += `\n${transaction.date} ||  || ${transaction.amount.toFixed(2)} || ${(balance -= transaction.amount).toFixed(2)}`;
      }
    })
    return this.statement
  }

  addTransaction(transaction) {
    this.history.transactions.push(transaction);
  }

  deposit(amount) {
    this.addTransaction(new this.transactionClass('deposit', amount));
  }

  withdraw(amount) {
    this.addTransaction(new this.transactionClass('withdraw', amount));
  }
}

module.exports = BankAccount;