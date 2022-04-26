class BankAccount {
  constructor (balance = 0) {
    this.statement = ['date || credit || debit || balance'];
    this.balance = balance
  }

  createStatement(history) {
    history.forEach(transaction => {
      if(transaction.type === 'deposit'){
        this.statement.push(`${transaction.date} || ${transaction.amount.toFixed(2)} ||  || ${(this.balance += transaction.amount).toFixed(2)}`);
      } else if (transaction.type === 'withdraw'){
        this.statement.push(`${transaction.date} ||  || ${transaction.amount.toFixed(2)} || ${(this.balance -= transaction.amount).toFixed(2)}`);
      }
    })
    return this.statement
  }
}

module.exports = BankAccount;