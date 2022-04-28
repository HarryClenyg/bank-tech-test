const Transaction = require("../lib/transaction");

jest
      .useFakeTimers()
      .setSystemTime(new Date('2020-01-01'));
      
describe("Transaction", () => {
  it("can return an object including all the transaction properties", () => {
    const transaction = new Transaction('deposit', 1000);
    expect(transaction).toEqual(expect.objectContaining({
      type: 'deposit',
      amount: 1000,
      date: new Date('2020-01-01')
    }));
  });
});
