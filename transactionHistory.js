class History {
  constructor() {
    this.transactions = []
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }
}

module.exports = History;
