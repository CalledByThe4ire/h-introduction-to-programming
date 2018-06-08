// @flow

const sequenceSum = (begin: number, end: number): number => {
  if (begin > end) return NaN;
  if (begin === end) return begin;
  return end + sequenceSum(begin, end - 1);
};

export default sequenceSum;

