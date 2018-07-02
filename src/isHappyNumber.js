import { length } from './strings'; // eslint-disable-line
// @flow
const sumOfSquareDigits = (num: number): number => {
  const numAsStr: string = String(num);
  let sum: number = 0;
  for (let i: number = 0; i < length(numAsStr); i += 1) {
    const digit: number = Number(numAsStr[i]);
    sum += digit * digit;
  }

  return sum;
};

// BEGIN (write your solution here)

// END
