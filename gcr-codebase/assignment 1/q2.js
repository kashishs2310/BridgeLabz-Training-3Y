const userName = "Kashish";
const age = 21;
const isStudent = true;
const skills = ["JavaScript", "Java", "Networking"];
const profile = { city: "Agra", course: "B.Tech CS" };
const middleName = null;
let phoneNumber;

function getType(value) {
  if (Array.isArray(value)) return "array";
  if (value === null) return "null";
  return typeof value;
}

const entries = [
  { Label: "userName", Value: userName, Type: getType(userName) },
  { Label: "age", Value: age, Type: getType(age) },
  { Label: "isStudent", Value: isStudent, Type: getType(isStudent) },
  { Label: "skills", Value: JSON.stringify(skills), Type: getType(skills) },
  { Label: "profile", Value: JSON.stringify(profile), Type: getType(profile) },
  { Label: "middleName", Value: middleName, Type: getType(middleName) },
  { Label: "phoneNumber", Value: phoneNumber, Type: getType(phoneNumber) },
];

console.table(entries);