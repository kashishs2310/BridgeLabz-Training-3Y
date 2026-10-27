// Q7: Closure with makeMultiplier

function makeMultiplier(multiplier) {
  // The inner function "remembers" `multiplier` from the outer function
  return function (number) {
    return number * multiplier;
  };
}

const double = makeMultiplier(2);
const triple = makeMultiplier(3);

console.log(triple(5)); // 15
console.log(double(5)); // 10

/*
  How closure works here:
  - makeMultiplier(3) runs, creates the variable `multiplier = 3`, returns the
    inner function, and then finishes.
  - Normally, `multiplier` would disappear after the function ends. But the
    returned inner function still refers to it, so JavaScript keeps that
    variable alive.
  - A closure is a function bundled together with the variables from the scope
    where it was created. So triple remembers multiplier = 3, and double
    remembers multiplier = 2. Each call to makeMultiplier gets its own
    private copy.
*/