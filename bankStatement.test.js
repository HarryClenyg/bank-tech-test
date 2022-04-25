const BankStatement = require("./bankStatement");

describe("Bank Statement", () => {
  it("can print a statement", () => {
    const transaction = new Transaction('deposit', 1000);
    expect(transaction.difference).toEqual(1000);
  });

  it("can accept a withdrawal", () => {
    const transaction = new Transaction('withdrawal', 750);
    expect(transaction.difference).toEqual(-750);
  });

  it("includes date of transation", () => {
    const transaction = new Transaction('deposit', 500);
    expect(transaction.date).toBeDefined;
  });
});
