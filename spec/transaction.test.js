const Transaction = require("../lib/transaction");

describe("Transaction", () => {
  it("can accept a deposit", () => {
    const transaction = new Transaction('deposit', 1000);
    expect(transaction.amount).toEqual(1000);
  });

  it("can accept a withdrawal", () => {
    const transaction = new Transaction('withdraw', 750);
    expect(transaction.amount).toEqual(750);
  });

  it("includes date of transation", () => {
    const transaction = new Transaction('deposit', 500);
    expect(transaction.date).toBeDefined;
  });
});