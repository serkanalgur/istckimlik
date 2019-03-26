import { isTCKimlik } from '../index';
test('TCKimlik Should be True', () => {
	expect(isTCKimlik(34400221062)).toBe(true);
});

test('TCKimlik Should be False Because Start With zero', () => {
	expect(isTCKimlik(0o3440022102)).toBe(false);
});

test('TCKimlik Should be False Because of Count', () => {
	expect(isTCKimlik(344002210621)).toBe(false);
});

test('TCKimlik Should be False Because Missing Count', () => {
	expect(isTCKimlik(3440022106)).toBe(false);
});

test('TCKimlik Should be False Because Fake ID Number', () => {
	expect(isTCKimlik(48265878921)).toBe(false);
});