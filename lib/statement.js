class Statement {
  constructor(openingBalance, transactionHistory) {
    this.statement = 'date || credit || debit || balance';
      transactionHistory.forEach(transaction => {
      if(transaction.type === 'deposit'){
        this.statement += `\n${transaction.date} || ${transaction.amount.toFixed(2)} ||  || ${(openingBalance += transaction.amount).toFixed(2)}`;
      } else if (transaction.type === 'withdraw'){
        this.statement += `\n${transaction.date} ||  || ${transaction.amount.toFixed(2)} || ${(openingBalance -= transaction.amount).toFixed(2)}`;
      }
    })
    return this.statement
  }
}

module.exports = Statement