// Bank
// The bank has many accounts. Accounts should be objects that all share a set of common functionality.

// There is only one bank. This bank has an array of accounts.
var accountsInBank = [
  {
    userName: "Katrina",
    balance: 1000
  },
  {
    userName: "John",
    balance: 15800
  }
];

// The bank needs a method that will return the total sum of money in the accounts.
var sum = 0;
for (var i = 0; i < accountsInBank.length; i++) {
  sum += accountsInBank[i].balance;
};

console.log("The total bank balance is $" + sum);

// It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.
//


var addAccount =function(newUserName,newUserBalance){
  var newAccount = {userName: newUserName, balance:                 newUserBalance};
  accountsInBank.push(newAccount);
};

addAccount("Jessica", 9000);
addAccount("Harold", 20000);
console.log(accountsInBank);

//To deposit money into an account//
var depositAccount = function(name, amt){
  for (var i = 0; i < accountsInBank.length; i++) {
    if(name === accountsInBank[i].userName){
    accountsInBank[i].balance = accountsInBank[i].balance + amt;
    }
  };
}
depositAccount("Katrina", 100);

//To withdraw money from an account//
var withdrawAccount = function(name, amt){
  for (var i = 0; i < accountsInBank.length; i++) {
    if(accountsInBank[i].balance > amt){ //Bonus: added the if statement so the user can not take out more than their balance//
      if(name === accountsInBank[i].userName){
        accountsInBank[i].balance = accountsInBank[i].balance - amt;
      }
    }else{
      console.log("You have insufficient funds!");
    }
};
}
withdrawAccount("Katrina", 2000);
withdrawAccount("Katrina", 500);

//To transfer money from one account to another//
var transfer = function(transferFrom, transferTo, amt){
  for (var i = 0; i < accountsInBank.length; i++) {
    if(transferFrom === accountsInBank[i].userName){
    accountsInBank[i].balance = accountsInBank[i].balance - amt;
    }
    if(transferTo === accountsInBank[i].userName){
      accountsInBank[i].balance = accountsInBank[i].balance + amt;
    }
  };
};
transfer("Katrina", "John", 100);
