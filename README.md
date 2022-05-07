# Bank Node app

## Requirements

- You should be able to interact with your code via a REPL like IRB or Node. (You don't need to implement a command line interface that takes input from STDIN.)
- Deposits, withdrawal.
- Account statement (date, amount, balance) printing.
- Data can be kept in memory (it doesn't need to be stored to a database or anything).

## Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2023  
**And** a deposit of 2000 on 13-01-2023  
**And** a withdrawal of 500 on 14-01-2023  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```

## Getting started
Run the following commands to set up the app:<br> 
```git clone https://github.com/HarryClenyg/bank-tech-test.git```<br>
```cd bank-tech-test```<br>
```cd npm install```<br>
```cd lib```<br>
```node```<br>

Next, import the necessary classes:</br>
```const Account = require("./bankAccount");```<br>
```const Statement = require("./statement");```<br>
```const Transaction = require("./transaction");```<br>

Finally, create a new instance of the bankAccount class:<br>
```barclays = new Account```<br>

You will then need to import the necessary classes

## Usage

<table>
    <thead>
        <tr>
            <th>Command</th>
            <th>Definition</th>
            <th>Example</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>barclays.deposit(amount)</td>
            <td width="100">adds a new, timestamped deposit of 'amount' to transactionHistory.</td>
            <td rowspan=5><img src="screenshots/Screen%20Shot%202022-05-07%20at%204.14.08%20PM.png?raw=true" width="300"></td>
        </tr>
        <tr>
            <td>barclays.withdraw(amount)</td>
            <td >adds a new, timestamped withdrawal of 'amount' to transactionHistory.</td>
        </tr>
        <tr>
            <td>barclays.transactionHistory</td>
            <td>allows the user to view transactionHistory.</td>
        </tr>
        <tr>
            <td>barclays.currentBalance()</td>
            <td>displays the current balance.</td>
        </tr>
        <tr>
            <td>barclays.printStatement()</td>
            <td>creates a new statement. This command returns a linear statement, however if you run: 'console.log(barclays.printStatement)', a tabular statement is printed to the REPL</td>
        </tr>
    </tbody>
</table>

## Testing

Use the command ```jest``` to run all tests.

Unit tests can be found in the statement.test.js and transaction.test.js files. All feature tests are located in the bankAccount.test.js file as this this is the only file which depends on other classes.

The tests use the code ```jest.fakeTimers.setSystemTime(new Date('2020-01-01'));```, to mock the date, and a mock object was created to simulate the transactionHistory.


## Initial strategy

- Create the program in JS with Node.
- 3 classes Transactions, History, BankAccount.
- Use TDD process to mitigate bugs.

## Transactions Class
I started with the Transactions Class as that seemed it would not need to rely on any other classes, which meant I could test appropriately from the start.

To begin with, I included a 'difference' property as opposed to the 'amount' property. The reflected the difference it would make to the balance. It also enabled me to test the behaviour of the class.  I later refactored the 'difference' out of this class as it gave me problems when printing the statement. 

## History Class
I initially planned for the History Class to have an 'addTransaction' method but this caused a dependency conflict, so I abandoned the History class and moved the 'addTransaction' method into the BankAccount class which gets called when users make a deposit/withdrawal.

## BankAccount Class
My idea for the bank account class was for it to behave like an ATM. So for that I understood I would need to have methods for 'deposit', 'withdraw', 'printStatement' and 'currentBalance'.

## Statement Class
I wanted 'printStatement' to return a blank statement if there hadn't been any transactions yet, so originally, I added the headers for the statement as string in a 'statement' property of the BankAccount object. However, this caused the BankAccount class to be a bit too verbose, so I refactored the rendering of the statement into a new Statement class.
