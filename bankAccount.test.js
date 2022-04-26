const BankAccount = require("./bankAccount");
const History = require("./transactionHistory");
const Transaction = require("./transaction");

describe("Bank Account", () => {
  it("can create a statement", () => {
    const bankAccount = new BankAccount(7000.00);
    const transactionHistory = new History();
    transactionHistory.addTransaction(new Transaction('deposit', 1000.00, '25/04/2022'));
    transactionHistory.addTransaction(new Transaction('withdraw', 750.00, '26/04/2022'));
    expect(bankAccount.createStatement(transactionHistory.transactions)).toEqual([
      'date || credit || debit || balance',
      '25/04/2022 || 1000.00 ||  || 8000.00',
      '26/04/2022 ||  || 750.00 || 7250.00'
    ]);
  });
});
