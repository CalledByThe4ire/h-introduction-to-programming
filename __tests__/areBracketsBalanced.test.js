import areBracketsBalanced from '../src/areBracketsBalanced';

test('should be valid', () => {
  const str = '()';
  expect(areBracketsBalanced(str)).toBe(true);

  const str2 = '(())';
  expect(areBracketsBalanced(str2)).toBe(true);

  const str3 = '(())';
  expect(areBracketsBalanced(str3)).toBe(true);

  const str4 = '(()((((())))))';
  expect(areBracketsBalanced(str4)).toBe(true);

  const str5 = '';
  expect(areBracketsBalanced(str5)).toBe(true);
});

test('should be invalid', () => {
  const str1 = '((';
  expect(areBracketsBalanced(str1)).toBe(false);

  const str2 = '((())';
  expect(areBracketsBalanced(str2)).toBe(false);

  const str3 = '(())())';
  expect(areBracketsBalanced(str3)).toBe(false);

  const str4 = '(()(()))))';
  expect(areBracketsBalanced(str4)).toBe(false);

  const str5 = ')';
  expect(areBracketsBalanced(str5)).toBe(false);
});
