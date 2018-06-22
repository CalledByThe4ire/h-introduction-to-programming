/* eslint-disable function-paren-newline */
// @flow
const permutator = (inputArr: Array<mixed>): Array<mixed[]> => {
  const result: Array<mixed[]> = [];

  const permute = (arr: Array<mixed>, m: Array<mixed> = []): void => {
    if (arr.length === 0) {
      result.push(m);
    } else {
      for (let i = 0; i < arr.length; i += 1) {
        const curr: Array<mixed> = arr.slice();
        const next: Array<mixed> = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next));
      }
    }
  };

  permute(inputArr);

  return result;
};

const unique = (arr: Array<mixed>): Array<mixed> =>
  arr.filter(
    (element: mixed, index: number, array: Array<mixed>) =>
      array.indexOf(element) === index,
  );

const make = (zero: number, one: number): Array<mixed> => {
  let x: number = one;
  let y: number = zero;

  const unit: number = 1;
  const nil: number = 0;

  const arr: Array<any> = [];

  while (x !== 0) {
    arr.push(unit);
    x -= 1;
  }

  while (y !== 0) {
    arr.push(nil);
    y -= 1;
  }

  return arr;
};

const stringify = (arr: Array<mixed[]>): Array<mixed> =>
  arr.map(element => element.toString());
const removeCopies = (arr: Array<mixed>): Array<mixed> => unique(arr);
const filterZero = (arr: Array<mixed>): Array<mixed> =>
  arr.filter(element => element.match(/(0,?\s?){2}/g));
const findDiff = (arr1: Array<mixed>, arr2: Array<mixed>): number =>
  arr1.length - arr2.length;

const withoutTwoZeros = (a: number, b: number): number => {
  const permutationsList: Array<mixed> = removeCopies(stringify(permutator(make(a, b))));
  const filtered: Array<mixed> = filterZero(permutationsList);
  return findDiff(permutationsList, filtered);
};

export default withoutTwoZeros;
