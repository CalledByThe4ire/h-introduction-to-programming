// @flow
const withoutTwoZeros = (a: number, b: number): number => {
  if (a > b + 1) {
    return 0;
  } else if (a === 0 || b === 0) {
    return 1;
  }

  return withoutTwoZeros(a, b - 1) + withoutTwoZeros(a - 1, b - 1);
};

export default withoutTwoZeros;
