const Statement = require("../lib/statement");

openingBalanceMock = 7000
transactionHistoryMock = [
  {type: 'deposit', amount: 1000.00, date: new Date('2022-04-22')},
  {type: 'withdraw', amount: 750.00, date: new Date('2022-04-23')}
]

const statement = new Statement(openingBalanceMock, transactionHistoryMock)


describe("Statement", () => {
  it("can print a statement", () => {
    expect(statement.statement).toEqual(
      'date || credit || debit || balance\n22/04/2022 || 1000.00 ||  || 8000.00\n23/04/2022 ||  || 750.00 || 7250.00'
    );
  });
});
