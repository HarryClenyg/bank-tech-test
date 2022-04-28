const BankAccount = require("../lib/bankAccount");

const bankAccount = new BankAccount(7000.00);
jest
.useFakeTimers()
.setSystemTime(new Date('2020-01-01'));

describe("Bank Account", () => {
  it("can print a blank statement", () => {
    expect(bankAccount.printStatement()).toEqual(
      'date || credit || debit || balance'
    );
  });

  it("can make a deposit", () => {
    bankAccount.deposit(1000);
    expect(bankAccount.printStatement()).toEqual(
      'date || credit || debit || balance\n01/01/2020 || 1000.00 ||  || 8000.00'
    );
  })

  it("can make a withdrawal", () => {
    bankAccount.withdraw(750);
    expect(bankAccount.printStatement()).toEqual(
      'date || credit || debit || balance\n01/01/2020 || 1000.00 ||  || 8000.00\n01/01/2020 ||  || 750.00 || 7250.00'
    );
  })

  it("knows the current balance", () => {
    expect(bankAccount.currentBalance()).toEqual("7250.00")
  });
});
