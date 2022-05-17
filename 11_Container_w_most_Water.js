var calculateArea = function (left, right, height) {
  if (height[left] >= height[right]) return height[right] * (right - left);
  return height[left] * (right - left);
};

var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let Area = calculateArea(left, right, height);
  while (left !== right) {
    if (height[left] >= height[right]) {
      if (height[right - 1] >= height[right]) {
        const b = calculateArea(left, right - 1, height);
        Area = b >= Area ? b : Area;
      }
      right--;
    } else {
      if (height[left + 1] >= height[left]) {
        const b = calculateArea(left + 1, right, height);
        Area = b >= Area ? b : Area;
      }
      left++;
    }
  }
  return Area;
};

const test1 = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const test2 = [1, 1];
// console.log("maxArea", maxArea(test1));

// Algorithm
// Start with outer most widths. Calculate Area = A
// Pick shorter of two heights
// If - there is a taller height than shortest height of left or right. Move to that (
// Test, if area > save area
//  Pick of shorter two heights and search for a new tallest.
//  repeat until left index = right index.
// 0(N)

// Refractor

var maxArea2 = function (height) {
  let left = 0;
  let right = height.length - 1;
  let maxWater = 0;
  while (left < right) {
    let distance = right - left;
    let shortest = Math.min(height[left], height[right]);
    let area = distance * shortest;
    maxWater = Math.max(maxWater, area);
    height[left] >= height[right] ? right-- : left++;
  }
  return maxWater;
};
console.log(maxArea2(test1));
