import sum, { sub } from './app';

test('test sum of 1 and 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('test minus operation of 2 - 1 = 1', () => {
  expect(sub(2, 1)).toBe(1);
});