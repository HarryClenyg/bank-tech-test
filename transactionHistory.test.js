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
    console.log(transaction)
    expect(transactionHistory.transactions).toBeArray;
    expect(transactionHistory.transactions[0]).toEqual(
      expect.objectContaining({
        type: 'deposit',
        difference: 1000
      })
    );
  });
});
