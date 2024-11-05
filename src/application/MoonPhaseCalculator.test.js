import {calculateMoonPhaseByDate} from './MoonPhaseCalculator.js';

test('should return new-moon', () => {
    expect(calculateMoonPhaseByDate(new Date(2000, 0, 6))).toBe('new-moon');
});
test('should return waxing-crescent', () => {
    expect(calculateMoonPhaseByDate(new Date(2000, 0, 7))).toBe('waxing-crescent');
});
test('should return waxing-crescent', () => {
    expect(calculateMoonPhaseByDate(new Date(2000, 0, 8))).toBe('waxing-crescent');
});
test('should return waxing-crescent', () => {
    expect(calculateMoonPhaseByDate(new Date(2000, 0, 9))).toBe('waxing-crescent');
});
test('should return waxing-crescent', () => {
    expect(calculateMoonPhaseByDate(new Date(2000, 0, 10))).toBe('waxing-crescent');
});
test('should return waxing-crescent', () => {
    expect(calculateMoonPhaseByDate(new Date(2000, 0, 11))).toBe('waxing-crescent');
});
test('should return waxing-crescent', () => {
    expect(calculateMoonPhaseByDate(new Date(2000, 0, 12))).toBe('waxing-crescent');
});
test('should return waxing-crescent', () => {
    expect(calculateMoonPhaseByDate(new Date(2000, 0, 13))).toBe('waxing-crescent');
});


test('should return first-quarter', () => {
    expect(calculateMoonPhaseByDate(new Date(2000, 0, 14))).toBe('first-quarter');
});
test('should return waxing-gibbous', () => {
    expect(calculateMoonPhaseByDate(new Date(2000, 0, 15))).toBe('waxing-gibbous');
});
test('should return waxing-gibbous', () => {
    expect(calculateMoonPhaseByDate(new Date(2000, 0, 16))).toBe('waxing-gibbous');
});
test('should return waxing-gibbous', () => {
    expect(calculateMoonPhaseByDate(new Date(2000, 0, 17))).toBe('waxing-gibbous');
});
test('should return waxing-gibbous', () => {
    expect(calculateMoonPhaseByDate(new Date(2000, 0, 18))).toBe('waxing-gibbous');
});
test('should return waxing-gibbous', () => {
    expect(calculateMoonPhaseByDate(new Date(2000, 0, 19))).toBe('waxing-gibbous');
});
test('should return waxing-gibbous', () => {
    expect(calculateMoonPhaseByDate(new Date(2000, 0, 20))).toBe('waxing-gibbous');
});


test('should return full-moon', () => {
    expect(calculateMoonPhaseByDate(new Date(2000, 0, 21))).toBe('full-moon');
});
test('should return waning-gibbous', () => {
    expect(calculateMoonPhaseByDate(new Date(2000, 0, 22))).toBe('waning-gibbous');
});
test('should return waning-gibbous', () => {
    expect(calculateMoonPhaseByDate(new Date(2000, 0, 23))).toBe('waning-gibbous');
});
test('should return waning-gibbous', () => {
    expect(calculateMoonPhaseByDate(new Date(2000, 0, 24))).toBe('waning-gibbous');
});
test('should return waning-gibbous', () => {
    expect(calculateMoonPhaseByDate(new Date(2000, 0, 25))).toBe('waning-gibbous');
});
test('should return waning-gibbous', () => {
    expect(calculateMoonPhaseByDate(new Date(2000, 0, 26))).toBe('waning-gibbous');
});
test('should return waning-gibbous', () => {
    expect(calculateMoonPhaseByDate(new Date(2000, 0, 27))).toBe('waning-gibbous');
});


test('should return last-quarter', () => {
    expect(calculateMoonPhaseByDate(new Date(2000, 0, 28))).toBe('last-quarter');
});
test('should return waning-crescent', () => {
    expect(calculateMoonPhaseByDate(new Date(2000, 0, 29))).toBe('waning-crescent');
});
test('should return waning-crescent', () => {
    expect(calculateMoonPhaseByDate(new Date(2000, 0, 30))).toBe('waning-crescent');
});
test('should return waning-crescent', () => {
    expect(calculateMoonPhaseByDate(new Date(2000, 0, 31))).toBe('waning-crescent');
});
test('should return waning-crescent', () => {
    expect(calculateMoonPhaseByDate(new Date(2000, 1, 1))).toBe('waning-crescent');
});
test('should return waning-crescent', () => {
    expect(calculateMoonPhaseByDate(new Date(2000, 1, 2))).toBe('waning-crescent');
});
test('should return waning-crescent', () => {
    expect(calculateMoonPhaseByDate(new Date(2000, 1, 3))).toBe('waning-crescent');
});
test('should return waning-crescent', () => {
    expect(calculateMoonPhaseByDate(new Date(2000, 1, 4))).toBe('waning-crescent');
});