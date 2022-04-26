const History = require("./transactionHistory");

const transaction = {
  type: 'deposit',
  difference: 1000,
  date: 'today'
}

describe("TransactionHistory", () => {
  it("can add a transaction", () => {
    const transactionHistory = new History()
    transactionHistory.addTransaction(transaction)
    expect(transactionHistory.transactions).toBeArray;
    expect(transactionHistory.transactions[0]).toEqual(
      expect.objectContaining({
        type: 'deposit',
        difference: 1000
      })
    );
  })

  it("can add multiple transactions", () => {
    const transaction2 = {
      type: 'withdraw',
      difference: -750,
      date: 'later today'
    }
    const transactionHistory = new History()
    transactionHistory.addTransaction(transaction)
    transactionHistory.addTransaction(transaction2)
    expect(transactionHistory.transactions).toBeArray;
    expect(transactionHistory.transactions[1]).toEqual(
      expect.objectContaining({
        type: 'withdraw',
        difference: -750
      })
    );
  })
});
