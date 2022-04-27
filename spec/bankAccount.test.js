const BankAccount = require("../lib/bankAccount");

const bankAccount = new BankAccount(7000.00);
jest
  .useFakeTimers()
  .setSystemTime(new Date('2020-01-01'));

bankAccount.deposit(1000);
bankAccount.withdraw(750);


describe("Bank Account", () => {
  it("can make a deposit", () => {
    expect(bankAccount.history.transactions[0]).toEqual(expect.objectContaining({
      type: 'deposit',
      amount: 1000,
      date: '01/01/2020'
    }))
  })

  it("can make a withdrawal", () => {
    expect(bankAccount.history.transactions[1]).toEqual(expect.objectContaining({
      type: 'withdraw',
      amount: 750,
      date: '01/01/2020'
    }))
  })

  it("knows the current balance", () => {
    expect(bankAccount.currentBalance()).toEqual("7250.00")
  });
  
  it("can print a statement", () => {
    expect(bankAccount.printStatement(bankAccount.history.transactions)).toEqual(
      'date || credit || debit || balance\n01/01/2020 || 1000.00 ||  || 8000.00\n01/01/2020 ||  || 750.00 || 7250.00'
    );
  });
});
