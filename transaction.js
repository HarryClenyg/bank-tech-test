class Transaction {
  constructor(type, amount, date = new Date().toLocaleDateString('en-GB')) {
    this.difference = 0;
    this.type = type;
    this.date = date;
    if(this.type === "deposit"){
      this.difference += amount;
    } else if(this.type === "withdraw"){
      this.difference -= amount;
    }
  }
}

module.exports = Transaction;
