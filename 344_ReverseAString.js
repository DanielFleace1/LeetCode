// Write a function that reverses a string. The input string is given as an array of characters s.
// You must do this by modifying the input array in-place with O(1) extra memory.

const s = ["h", "e", "l", "l", "o"];
const reverseString = function (s) {
  for (let i = s.length - 2; i >= 0; i--) {
    const replace = s.splice(i, 1);
    s.push(replace[0]);
  }
};
reverseString(s);
console.log(s);
