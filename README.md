# bank-tech-test

### Requirements

- You should be able to interact with your code via a REPL like IRB or Node. (You don't need to implement a command line interface that takes input from STDIN.)
- Deposits, withdrawal.
- Account statement (date, amount, balance) printing.
- Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

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

### Basic strategy

- Create the program in JS with Node.
- 3 classes Transactions, History, BankAccount.
- Use TDD process to mitigate bugs.

### Transactions Class
I started with the Transactions Class as that seemed it would not need to rely on any other classes, which meant I could test appropriately from the start.

To begin with, I included a 'difference' property as opposed to the 'amount' property. The reflected the difference it would make to the balance. It also enabled me to test the behaviour of the class.  I later refactored the 'difference' out of this class as it gave me problems when printing the statement. The result is that I was no longer able to test the behaviour of the class, which isn't ideal.

### History Class
The History Class is very simple. It essentially serves as the memory for the program. I created an empty array on instatiation of the class, which can then be populated with the method 'addTransaction'. I tried to find a way to get to get transactions to automatically populate the History class without having to be instatiated in the parameter for 'addTransaction' but couldn't work it out, so this was the best solution that still generated the desired output.

### BankAccount Class
My idea for the bank account class was for it to behave like an ATM. So for that I understood I would need to have methods for 'printStatement' and 'currentBalance' as well as instatiating the History class to allow access to the 'addTransaction' method.

I wanted 'printStatement' to return a blank statement if there hadn't been any transactions yet, so I added the headers for the statement as string in the 'statement' property of the BankAccount object, making it straightforward to call, and allowing a more simple approach when creating the 'printStatement' method. 

The method itself proved to be less complicated than I expected, although I struggled with the decimal format for the numbers as JS doesn't seem to enable you to return floats very easily. My understanding is that JS ignores decimal places if they are only 0s. The workaround was to fix the number of decimals and then convert the result into a string before returning.

As for the 'currentBalance' method. I began by adding/subtracting amounts directly to the 'openingBalance' property, but realised that this only worked the first time I was calling the method. From this it was clear the the 'printStatement' method would have the same issue. I was able to correct this by assigning the 'openingBalance' method to a variable in each method, which could then be manipulated without changing the original 'openingBalance' property.