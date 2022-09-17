import Validator from '../validator';

test('Validating username', () => {
  expect(Validator.validateUsername('_Vasya871-True')).toBe(false);
  expect(Validator.validateUsername('Vasya871-True7')).toBe(false);
  expect(Validator.validateUsername('Vasya8714-True')).toBe(false);
  expect(Validator.validateUsername('Vasya871-True')).toBe(true);
  expect(Validator.validateUsername('Vasya871-55True17_t')).toBe(true);
});
