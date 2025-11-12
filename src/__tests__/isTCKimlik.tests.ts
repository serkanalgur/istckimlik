import { isTCKimlik } from '../index';

// Test cases for Turkish Identification Number validation

test('TCKimlik Should be False Because Start With zero', () => {
  expect(isTCKimlik(0o3440051506)).toBe(false);
});

test('TCKimlik Should be False Because of Count (Too many digits)', () => {
  expect(isTCKimlik(341238892661)).toBe(false);
});

test('TCKimlik Should be False Because Missing Count (Too few digits)', () => {
  expect(isTCKimlik(3412388926)).toBe(false);
});

test('TCKimlik Should be False Because Fake ID Number (Invalid checksum)', () => {
  expect(isTCKimlik(48265878921)).toBe(false);
});
