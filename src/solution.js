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

