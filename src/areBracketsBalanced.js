/* eslint-disable no-constant-condition */
import { length } from './strings';

// BEGIN (write your solution here)
// @flow
const isEven = (n: number): boolean => {
  const num: number = Number(n);
  return num === 0 || !!(num && !(num % 2));
};

const countTxtEntries = (str: string, substr: string): number => {
  let pos: number = 0;
  let counter: number = 0;

  while (true) {
    const foundPos: number = str.indexOf(substr, pos);

    if (foundPos === -1) {
      break;
    }

    counter += 1;
    pos = foundPos + 1;
  }

  return counter;
};

export default (str: string): boolean => {
  if (!isEven(length(str))) {
    return false;
  }
  return countTxtEntries(str, '(') === countTxtEntries(str, ')');
};
// END
