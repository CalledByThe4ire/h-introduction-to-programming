// BEGIN (write your solution here) (write your solution here)
// @flow
const isPerfect = (n: number): boolean => {
  if (n === 0) return false;

  let divisor: number = 1;
  let sum: number = 0;

  while (divisor < n) {
    if (n % divisor === 0) sum += divisor;
    divisor += 1;
  }

  if (sum === n) {
    return true;
  }
  return false;
};
// END

export default isPerfect;
