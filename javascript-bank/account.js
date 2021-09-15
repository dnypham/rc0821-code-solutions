/* exported Account */

function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  var transaction = new Transaction('deposit', amount);

  if (amount > 0 && Number.isInteger(amount)) {
    this.transactions.push(transaction);
    return true;
  } else {
    return false;
  }
};

Account.prototype.withdraw = function (amount) {
  var transaction = new Transaction('withdrawal', amount);

  if (amount > 0 && Number.isInteger(amount)) {
    this.transactions.push(transaction);
    return true;
  } else {
    return false;
  }
};

Account.prototype.getBalance = function () {
  var deposits = 0;
  var withdrawals = 0;
  var balance = 0;

  for (var i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'deposit') {
      deposits += this.transactions[i].amount;
    } else if (this.transactions[i].type === 'withdrawal') {
      withdrawals += this.transactions[i].amount;
    }
  }

  balance = deposits - withdrawals;
  return balance;
};
