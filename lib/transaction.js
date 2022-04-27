class Transaction {
  constructor(type, amount, date = new Date().toLocaleDateString('en-GB')) {
    this.amount = amount;
    this.type = type;
    this.date = date;

  }
}

module.exports = Transaction;
