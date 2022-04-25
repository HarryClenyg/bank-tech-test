const Transaction = require("./transaction");

describe("Transaction", () => {
  it("can accept a deposit", () => {
    const account = new Transaction;
    account.deposit(1000);
    expect(account.balance).toEqual(1000);
  });

  it("can accept a withdrawal", () => {
    const account = new Transaction;
    account.deposit(1000);
    account.withdraw(250);
    expect(account.balance).toEqual(750)
  });
});
