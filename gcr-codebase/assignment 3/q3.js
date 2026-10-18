"use strict";

const transactions = [
  { id: 1, amount: 2000 },
  { id: 2, amount: -500 },
  { id: 3 },
  null
];

class NegativeAmountError extends Error {
  constructor(msg) { super(msg); this.name = "NegativeAmountError"; }
}
class MissingFieldError extends Error {
  constructor(msg) { super(msg); this.name = "MissingFieldError"; }
}
class NullEntryError extends Error {
  constructor(msg) { super(msg); this.name = "NullEntryError"; }
}

function validate(tx) {
  if (tx === null) throw new NullEntryError("Transaction is null");
  if (tx.id === undefined || tx.amount === undefined) {
    throw new MissingFieldError(`Missing id or amount in ${JSON.stringify(tx)}`);
  }
  if (tx.amount < 0) throw new NegativeAmountError(`Negative amount (${tx.amount}) in transaction ${tx.id}`);
  return true;
}

const valid = [];
const invalid = [];
const errorCounts = { NegativeAmountError: 0, MissingFieldError: 0, NullEntryError: 0 };

for (let i = 0; i < transactions.length; i++) {
  const tx = transactions[i];
  debugger;
  try {
    validate(tx);
    valid.push(tx);
  } catch (err) {
    invalid.push({ index: i, type: err.name, message: err.message });
    errorCounts[err.name]++;
  }
}

console.log("===== TRANSACTION REPORT =====");
console.log("Valid transactions  :", valid);
console.log("Invalid transactions:", invalid);
console.log("Error categories    :", errorCounts);
console.log(`Successful: ${valid.length} | Failed: ${invalid.length} | Total: ${transactions.length}`);