/* eslint-disable function-paren-newline */
// @flow
export default (a: number, b: number): number => {
  const angle = Math.abs(a - b);
  const difference = angle > 180 ? 360 - angle : angle;
  return difference;
};
