
import { length } from './strings';

// BEGIN (write your solution here)
// @flow
export default (str: string): boolean => {
  let acc: number = 0;
  for (let i: number = 0; i < length(str); i += 1) {
    const symbol: string = str[i];
    acc = symbol === '(' ? acc + 1 : acc - 1;
    if (acc < 0) {
      return false;
    }
  }
  return acc === 0;
};
// END
