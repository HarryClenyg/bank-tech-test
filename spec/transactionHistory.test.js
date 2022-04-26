const History = require("../lib/transactionHistory");

const transaction = {
  type: 'deposit',
  amount: 1000,
}

const transaction2 = {
  type: 'withdraw',
  amount: 750,
}

const transactionHistory = new History()
transactionHistory.addTransaction(transaction)

describe("TransactionHistory", () => {
  it("can add a transaction", () => {
    expect(transactionHistory.transactions).toBeArray;
    expect(transactionHistory.transactions[0]).toEqual(
      expect.objectContaining({
        type: 'deposit',
        amount: 1000
      })
    );
  })

  it("can add multiple transactions", () => {
    transactionHistory.addTransaction(transaction2)
    expect(transactionHistory.transactions).toBeArray;
    expect(transactionHistory.transactions[1]).toEqual(
      expect.objectContaining({
        type: 'withdraw',
        amount: 750
      })
    );
  })
});
