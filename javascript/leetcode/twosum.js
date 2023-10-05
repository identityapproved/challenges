/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order. */

const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

/* const twoSum = function (nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const firstNum = nums[i];
    console.log("~ firstNum", firstNum);
    const secondNum = target - firstNum;
    console.log("~ secondNum", secondNum);
    if (map.has(secondNum)) {
      return [map.get(secondNum), i];
    }
    map.set(firstNum, i);
    console.log("~ map", map);
  }
}; */

/* 
const twoSum = function (nums, target) {
  let map = new Map();
  const length = nums.length;

  for (let i = 0; i < length; i++) {
    if (map[nums[i]] >= 0) {
      return [map[nums[i]], i];
    }
    map[target - nums[i]] = i;
    console.log("~ map[target - num[i]]", map[target - nums[i]]);
    console.log("~ map", map);
  }
};
 */

// const twoSum = function (nums, target) {
//   const map = {};
//   for (let i = 0; i < nums.length; i++) {
//     const value = nums[i];
//     const complementPair = target - value;
//     if (map[complementPair] !== undefined) {
//       return [map[complementPair], i];
//     } else {
//       map[value] = i;
//     }
//   }
// };

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
