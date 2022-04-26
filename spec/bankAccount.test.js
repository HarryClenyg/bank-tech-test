const BankAccount = require("../lib/bankAccount");
const Transaction = require("../lib/transaction");

const bankAccount = new BankAccount(7000.00);
bankAccount.history.addTransaction(new Transaction('deposit', 1000.00, '25/04/2022'));
bankAccount.history.addTransaction(new Transaction('withdraw', 750.00, '26/04/2022'));

describe("Bank Account", () => {

  it("knows the current balance", () => {
    expect(bankAccount.currentBalance()).toEqual("7250.00")
  });
  
  
  it("can print a statement", () => {
    expect(bankAccount.printStatement(bankAccount.history.transactions)).toEqual(
      'date || credit || debit || balance\n25/04/2022 || 1000.00 ||  || 8000.00\n26/04/2022 ||  || 750.00 || 7250.00'
    );
  });
});
