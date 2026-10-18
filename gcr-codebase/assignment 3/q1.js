"use strict";

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

const validNumbers = [];
const invalidEntries = [];

function isValidNumeric(value) {
  if (value === null || value === undefined) return false;
  if (typeof value === "string" && value.trim() === "") return false;
  return !Number.isNaN(Number(value));
}

console.log("===== DETAILED REPORT =====");
for (let i = 0; i < apiData.length; i++) {
  const raw = apiData[i];
  const asNumber = Number(raw);
  const asBoolean = Boolean(raw);
  const asString = String(raw);

  console.log(`\n[${i}] raw = ${JSON.stringify(raw)} (typeof ${raw === null ? "null" : typeof raw})`);
  console.log(`    Number : ${asNumber}`);
  console.log(`    Boolean: ${asBoolean}`);
  console.log(`    String : "${asString}"`);

  if (isValidNumeric(raw)) {
    validNumbers.push(asNumber);
    console.log("    STATUS : VALID number");
  } else {
    invalidEntries.push(raw);
    console.log("    STATUS : INVALID number -> skipped");
  }
}

console.log("\n===== SUMMARY =====");
console.log(`Valid numeric data  (${validNumbers.length}):`, validNumbers);
console.log(`Invalid entries     (${invalidEntries.length}):`, invalidEntries.map(String));
console.log(validNumbers.length > invalidEntries.length
  ? "Result: MOSTLY CLEAN data"
  : "Result: MOSTLY DIRTY data");