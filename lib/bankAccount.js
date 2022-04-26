const History = require("./transactionHistory");

class BankAccount {
  constructor (openingBalance = 0) {
    this.statement = 'date || credit || debit || balance';
    this.openingBalance = openingBalance
    this.history = new History
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
}

module.exports = BankAccount;