"use strict";

const rawData = [
  '{"user":"Alex","age":25}',
  '{"id":2}',
  '{invalid}',
  '{"user":"Mina","age":"22"}'
];

const cleanData = [];
const errors = [];
const requiredKeys = ["user", "age"];

for (let i = 0; i < rawData.length; i++) {
  const line = i + 1;
  try {
    const obj = JSON.parse(rawData[i]);
    const missing = requiredKeys.filter(k => !(k in obj));
    if (missing.length > 0) {
      throw new Error(`Missing key(s): ${missing.join(", ")}`);
    }
    cleanData.push(obj);
  } catch (err) {
    const kind = err instanceof SyntaxError ? "Invalid JSON" : "Validation error";
    errors.push({ line, kind, message: err.message });
    console.log(`Line ${line}: ${kind} -> ${err.message}`);
  }
}

console.log("\nClean entries:", cleanData);
console.log("Errors       :", errors);

const normalised = cleanData.map(u => ({ ...u, age: Number(u.age) }));
const adults = normalised.filter(u => u.age >= 18);
const minors = normalised.filter(u => u.age < 18);
console.log("\nAfter age conversion:", normalised);
console.log("Adults (18+)  :", adults);
console.log("Under-18 users:", minors);