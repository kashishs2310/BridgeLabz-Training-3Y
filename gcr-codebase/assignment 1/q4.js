const marks = [78, 85, 92, 66, 88];
const maxMarksPerSubject = 100;

let total = 0;
for (const mark of marks) {
  total += mark;
}
const average = total / marks.length;
const percentage = (total / (marks.length * maxMarksPerSubject)) * 100;

let failedAnySubject = false;
for (const mark of marks) {
  if (mark < 35) {
    failedAnySubject = true;
    break;
  }
}

console.log("Average   :", average.toFixed(2));
console.log("Percentage:", percentage.toFixed(2) + "%");

let result;
if (failedAnySubject || percentage < 50) {
  result = "Detained";
} else if (percentage >= 85) {
  result = "Promoted with Distinction";
} else {
  result = "Promoted";
}

console.log("Result    :", result);