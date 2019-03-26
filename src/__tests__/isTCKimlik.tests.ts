import { isTCKimlik } from '../index';

// All Turkish Identification Numbers are auto generated for testing

test('TCKimlik Should be True', () => {
	expect(isTCKimlik(34123889266)).toBe(true);
});

test('TCKimlik Should be False Because Start With zero', () => {
	expect(isTCKimlik(0o3440051506)).toBe(false);
});

test('TCKimlik Should be False Because of Count', () => {
	expect(isTCKimlik(341238892661)).toBe(false);
});

test('TCKimlik Should be False Because Missing Count', () => {
	expect(isTCKimlik(3412388926)).toBe(false);
});

test('TCKimlik Should be False Because Fake ID Number', () => {
	expect(isTCKimlik(48265878921)).toBe(false);
});