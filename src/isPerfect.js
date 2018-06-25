// BEGIN (write your solution here) (write your solution here)
// @flow
const isPerfect = (n: number): boolean => {
  if (n <= 0) {
    return false;
  }

  let sum = 0;
  for (let i: number = 1; i <= n / 2; i += 1) {
    if (n % i === 0) {
      sum += i;
    }
  }
  return sum === n;
};
// END

export default isPerfect;
