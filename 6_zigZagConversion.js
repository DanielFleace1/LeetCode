var convert = function (s, numRows) {
  if (numRows === 1) return s;
  let rowTracker = 0;
  let charCounter = 0;
  let map = {};
  // Initialize Map
  for (let i = 0; i < numRows; i++) {
    map[i] = new Array();
  }
  // Put Characters in correct Row
  while (charCounter < s.length) {
    map[String(Math.abs(rowTracker))].push(s[charCounter]);
    if (rowTracker === 0 || rowTracker === numRows - 1) {
      rowTracker *= -1;
    }
    rowTracker++;
    charCounter++;
  }
  //Push into return array
  let returnAry = new Array();
  for (prop in map) {
    returnAry.push(map[prop].join(""));
  }
  return returnAry.join("");
};

console.log(convert("PayPalIsHiring", 3));

// O(N) - Iterate through once;
