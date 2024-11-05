import {calculateMoonPhaseByDate} from './MoonPhaseCalculator.js';

test('should return new-moon', () => {
    expect(calculateMoonPhaseByDate(Date(2000, 0, 6))).toBe('new-moon');
});
test('should return new-moon', () => {
    expect(calculateMoonPhaseByDate(Date(2000, 0, 13))).toBe('new-moon');
});

test('should return first-quarter', () => {
    expect(calculateMoonPhaseByDate(Date(2000, 0, 14))).toBe('first-quarter');
});
test('should return first-quarter', () => {
    expect(calculateMoonPhaseByDate(Date(2000, 0, 20))).toBe('first-quarter');
});

test('should return full-moon', () => {
    expect(calculateMoonPhaseByDate(Date(2000, 0, 21))).toBe('full-moon');
});
test('should return full-moon', () => {
    expect(calculateMoonPhaseByDate(Date(2000, 0, 27))).toBe('full-moon');
});


test('should return third-quarter', () => {
    expect(calculateMoonPhaseByDate(Date(2000, 0, 28))).toBe('third-quarter');
});

test('should throws exception', () => {
    const date = 'not a date';
    expect(calculateMoonPhaseByDate(date)).toThrow('Passed argument type must be a Date');
});