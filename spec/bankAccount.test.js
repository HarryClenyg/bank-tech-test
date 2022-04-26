const BankAccount = require("../lib/bankAccount");

const bankAccount = new BankAccount(7000.00);
const transactionMock = {
  type: 'deposit',
  amount: 1000,
  date: '25/04/2022'
}
const transactionMock2 = {
  type: 'withdraw',
  amount: 750,
  date: '26/04/2022'
}

bankAccount.history.addTransaction(transactionMock);
bankAccount.history.addTransaction(transactionMock2);

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
