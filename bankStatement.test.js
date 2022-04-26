const BankStatement = require("./bankStatement");
const History = require("./transactionHistory");
const Transaction = require("./transaction");

describe("Bank Statement", () => {
  it("can print a statement", () => {
    const bankStatement = new BankStatement();
    const transactionHistory = new History();
    transactionHistory.addTransaction(new Transaction('deposit', 1000.00, '25/04/2022'));
    transactionHistory.addTransaction(new Transaction('withdraw', 750.00, '26/04/2022'));
    expect(bankStatement.bankStatement(transactionHistory.transactions)).toEqual([
      'date || credit || debit || balance',
      '25/04/2022 || 1000.00 ||  || ',
      '26/04/2022 ||  || 750.00 || '
    ]);
  });
});
