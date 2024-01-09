function createAccount(pin, amount) {
    return {
        checkBalance(inputPin) {
          if (inputPin !== pin) return "Invalid";
          return `$${amount}`;
        },
        deposit(inputPin, newAmount) {
          if (inputPin !== pin) return "Invalid";
          amount += newAmount;
          return `Succesfully deposited $${newAmount}. Current balance: $${amount}.`;
        },
        withdraw(inputPin, withdrawalAmount) {
          if (inputPin !== pin) return "Invalid";
          if (withdrawalAmount > amount)
            return "Withdrawal amount exceeds account balance. Transaction cancelled.";
          amount -= withdrawalAmount;
          return `Succesfully withdrew $${withdrawalAmount}. Current balance: $${amount}.`;
        },
        changePin(oldPin, newPin) {
          if (oldPin !== pin) return "Invalid";
          pin = newPin;
          return "PIN successfully changed!";
        }
      };
}

module.exports = { createAccount };
