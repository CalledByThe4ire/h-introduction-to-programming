// @flow

const smallestDivisor = (n: number): number => {
  const iter = (acc: number): number => {
    if (n === 1) {
      return 1;
    }
    if (n % acc === 0) {
      return acc;
    }
    return iter(acc + 1);
  };
  return iter(2);
};

export default smallestDivisor;

