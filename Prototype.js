function deposit(value) {
  this.balance = this.balance + value;
  console.log(`depositing value = ${value}`);
}

function withdraw(value) {
  if (this.balance >= value) {
    this.balance = this.balance - value;
    console.log(`Removing value = ${this.balance}`);
  } else {
    console.log("Insufficient balance");
  }
}

function statement() {
  console.log(`balance = ${this.balance}`);
}

function getBankAccount() {
  this.balance = 0;
}
getBankAccount.prototype.deposit = deposit;
getBankAccount.prototype.withdraw = withdraw;
getBankAccount.prototype.statement = statement;

var b1 = new getBankAccount();
var b2 = new getBankAccount();

b1.deposit(100);
b1.statement();
b1.withdraw(50);
b1.statement();

b2.deposit(200);
b2.statement();
b2.withdraw(100);
b2.statement();
