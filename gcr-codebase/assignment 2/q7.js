const feedback = "Great product! Fast delivery and amazing sound quality!";

const wordCount = feedback.split(" ").length;

const lowerFeedback = feedback.toLowerCase();

const hasNegative = lowerFeedback.includes("bad") || lowerFeedback.includes("poor");

console.log("Feedback  :", feedback);
console.log("Word count:", wordCount);

if (!hasNegative) {
  console.log("Positive Feedback");
} else {
  console.log("Needs Improvement");
}