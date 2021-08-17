import { sum, mult } from '../index';

it('suld add', () => {
  const result = sum(2, 3);
  expect(result).toEqual(5);
});

it('suld add', () => {
  const result = mult(2, 3);
  expect(result).toEqual(6);
});
