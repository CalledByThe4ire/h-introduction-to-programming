/* eslint-disable function-paren-newline */
// @flow
export default (angle1: number, angle2: number): number => {
  const periogon = 360;
  const rightAngle = periogon / 2;
  const miter = periogon / 8;
  if ((angle1 < 0 && angle1 > 360) || (angle2 < 0 && angle2 > 360)) {
    throw new Error(
      'Значение для каждого из углов должно ледать в диапазоне от 0 до 360',
    );
  }
  if (angle1 === 0 && angle2 <= rightAngle) {
    return angle2;
  } else if (angle2 === 0 && angle1 <= rightAngle) {
    return angle1;
  } else if (angle1 === 0 && angle2 > rightAngle) {
    return periogon - angle2;
  } else if (angle2 === 0 && angle1 > rightAngle) {
    return periogon - angle1;
  } else if (angle1 === miter && angle2 > rightAngle) {
    return periogon - (angle2 - angle1);
  } else if (angle2 === miter && angle1 > rightAngle) {
    return periogon - (angle1 - angle2);
  } else if ((angle1 !== 0 && angle2 !== 0) && (angle2 > angle1)) {
    return angle2 - angle1;
  } else if ((angle1 !== 0 && angle2 !== 0) && (angle1 > angle2)) {
    return angle1 - angle2;
  }
  return 0;
};
