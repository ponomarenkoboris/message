import { isValid } from '../src/scripts/validation';

// registration 
test('validation function registration ', () => {
    expect(isValid('registration', ['e', 'djfioj', 'cepof'])).toBe(false);
});
test('validation function registration ', () => {
    expect(isValid('registration', ['e', '5069', 'cepof'])).toBe(false);
});
test('validation function registration ', () => {
    expect(isValid('registration', ['ettt', ' ', 'cepof'])).toBe(false);
});

// message 
test('validation function message ', () => {
    expect(isValid('message', ' ')).toBe(false);
});
test('validation function message ', () => {
    expect(isValid('message', 'sdfjo>sdjf')).toBe(false);
});
test('validation function message ', () => {
    expect(isValid('message', ' sdckms ')).toBe(true);
});