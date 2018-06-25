// BEGIN (write your solution here) (write your solution here)
// @flow
const isPrime = (number: number): boolean => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const EuclidEulerTheorem = (number: number): number | null => {
  if (!isPrime((2 ** number) - 1)) {
    return null;
  }
  return (2 ** (number - 1)) * ((2 ** number) - 1);
};

const isPerfect = (number: number): boolean => {
  if (number <= 0) {
    return false;
  }

  for (let i = 1; i < number; i += 1) {
    if (number === EuclidEulerTheorem(i)) {
      return true;
    }
  }
  return false;
};
// END

export default isPerfect;
