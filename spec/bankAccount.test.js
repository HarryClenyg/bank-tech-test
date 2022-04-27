const BankAccount = require("../lib/bankAccount");

const bankAccount = new BankAccount(7000.00);
jest
  .useFakeTimers()
  .setSystemTime(new Date('2020-01-01'));

bankAccount.deposit(1000);
bankAccount.withdraw(750);


describe("Bank Account", () => {
  it("can make a deposit", () => {
    expect(bankAccount.transactionHistory[0]).toEqual(expect.objectContaining({
      type: 'deposit',
      amount: 1000,
      date: '01/01/2020'
    }))
  })

  it("can make a withdrawal", () => {
    expect(bankAccount.transactionHistory[1]).toEqual(expect.objectContaining({
      type: 'withdraw',
      amount: 750,
      date: '01/01/2020'
    }))
  })

  it("knows the current balance", () => {
    expect(bankAccount.currentBalance()).toEqual("7250.00")
  });
});
