class Transaction {
  constructor(type, amount, date = new Date()) {
    this.difference = 0;
    this.type = type;
    this.date = date;
    if(this.type === "deposit"){
      this.difference += amount;
    } else if(this.type === "withdrawal"){
      this.difference -= amount;
    }
  }
}

module.exports = Transaction;
