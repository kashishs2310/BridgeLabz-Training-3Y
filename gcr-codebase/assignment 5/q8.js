// Q8: Custom prototype method myMap() that behaves like Array.prototype.map()

Array.prototype.myMap = function (callback) {
  const result = [];
  // `this` is the array on which myMap was called
  for (let i = 0; i < this.length; i++) {
    // Like the built-in map: callback gets (element, index, array)
    result.push(callback(this[i], i, this));
  }
  return result; // returns a NEW array, original is unchanged
};

const numbers = [1, 2, 3];

console.log(numbers.myMap((num) => num * 2));              // [ 2, 4, 6 ]
console.log(numbers.myMap((num, index) => num + index));   // [ 1, 3, 5 ]
console.log(numbers);                                       // [ 1, 2, 3 ] (unchanged)

// Compare with the built-in map
console.log(numbers.map((num) => num * 2));                // [ 2, 4, 6 ]