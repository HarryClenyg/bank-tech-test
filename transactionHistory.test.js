const History = require("./transactionHistory");
const Transaction = require("./transaction");

describe("TransactionHistory", () => {
  it("can add a transaction", () => {
    const transactionHistory = new History()
    transactionHistory.addTransaction(new Transaction('deposit', 1000))
    expect(transactionHistory.transactions).toBeArray;
    expect(transactionHistory.transactions[0]).toEqual(
      expect.objectContaining({
        type: 'deposit',
        difference: 1000
      })
    );
  });
});
