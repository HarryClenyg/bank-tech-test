const Statement = require("../lib/statement");

openingBalanceMock = 7000
transactionHistoryMock = [
  {type: 'deposit', amount: 1000.00, date: '22/04/2022'},
  {type: 'withdraw', amount: 750.00, date: '23/04/2022'}
]

const statement = new Statement(openingBalanceMock, transactionHistoryMock)


describe("Bank Account", () => {
  it("can print a statement", () => {
    expect(statement.statement).toEqual(
      'date || credit || debit || balance\n22/04/2022 || 1000.00 ||  || 8000.00\n23/04/2022 ||  || 750.00 || 7250.00'
    );
  });
});
