const scores = Array.from({ length: 8 }, () =>
  Math.floor(Math.random() * 71) + 30
);

const highest = Math.max(...scores);
const lowest = Math.min(...scores);

const total = scores.reduce((sum, score) => sum + score, 0);
const average = total / scores.length;

const passed = scores.filter(score => score >= 50);

const results = scores.map(score => `${score} (${score >= 50 ? "Pass" : "Fail"})`);

console.log("===== Student Performance Summary =====");
console.log("Scores         :", scores.join(", "));
console.log("Detailed       :", results.join(", "));
console.log("Highest score  :", highest);
console.log("Lowest score   :", lowest);
console.log("Average score  :", average.toFixed(2));
console.log("Students passed:", passed.length, "out of", scores.length);
console.log("=======================================");