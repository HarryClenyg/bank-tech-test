class BankStatement {
  constructor () {
    this.statement = ['date || credit || debit || balance'];
  }

  bankStatement(history) {
    history.forEach(transaction => {
      if(transaction.type === 'deposit'){
        this.statement.push(`${transaction.date} || ${transaction.difference}.00 ||  || `);
      } else if (transaction.type === 'withdraw'){
        this.statement.push(`${transaction.date} ||  || ${-transaction.difference}.00 || `);
      }
    })
    return this.statement
  }
}

module.exports = BankStatement;