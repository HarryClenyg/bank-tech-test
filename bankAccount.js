class BankAccount {
  constructor (balance = 0) {
    this.statement = 'date || credit || debit || balance';
    this.balance = balance
  }

  printStatement(history) {
    history.forEach(transaction => {
      if(transaction.type === 'deposit'){
        this.statement += `\n${transaction.date} || ${transaction.amount.toFixed(2)} ||  || ${(this.balance += transaction.amount).toFixed(2)}`;
      } else if (transaction.type === 'withdraw'){
        this.statement += `\n${transaction.date} ||  || ${transaction.amount.toFixed(2)} || ${(this.balance -= transaction.amount).toFixed(2)}`;
      }
    })
    return this.statement
  }
}

module.exports = BankAccount;