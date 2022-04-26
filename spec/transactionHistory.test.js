const History = require("../lib/transactionHistory");

const transactionMock = {
  type: 'deposit',
  amount: 1000,
}

const transactionMock2 = {
  type: 'withdraw',
  amount: 750,
}

const transactionHistory = new History()
transactionHistory.addTransaction(transactionMock)

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
    transactionHistory.addTransaction(transactionMock2)
    expect(transactionHistory.transactions).toBeArray;
    expect(transactionHistory.transactions[1]).toEqual(
      expect.objectContaining({
        type: 'withdraw',
        amount: 750
      })
    );
  })
});
