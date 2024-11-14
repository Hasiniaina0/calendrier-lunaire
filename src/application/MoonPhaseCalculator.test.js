import { calculateMoonPhaseByDate } from "./MoonPhaseCalculator.js";

describe("calculateMoonPhaseByDate", () => {
  it("should return new-moon for a new moon date", () => {
    expect(calculateMoonPhaseByDate(new Date(2000, 0, 6))).toBe("new-moon");
  });

  it("should return waxing-crescent for a date between new moon and first quarter", () => {
    expect(calculateMoonPhaseByDate(new Date(2000, 0, 9))).toBe(
      "waxing-crescent"
    );
  });

  it("should return first-quarter for a first quarter date", () => {
    expect(calculateMoonPhaseByDate(new Date(2000, 0, 14))).toBe(
      "first-quarter"
    );
  });

  it("should return waxing-gibbous for a date between first quarter and full moon", () => {
    expect(calculateMoonPhaseByDate(new Date(2000, 0, 17))).toBe(
      "waxing-gibbous"
    );
  });

  it("should return full-moon for a full moon date", () => {
    expect(calculateMoonPhaseByDate(new Date(2000, 0, 21))).toBe("full-moon");
  });

  it("should return waning-gibbous for a date between full moon and last quarter", () => {
    expect(calculateMoonPhaseByDate(new Date(2000, 0, 25))).toBe(
      "waning-gibbous"
    );
  });

  it("should return last-quarter for a last quarter date", () => {
    expect(calculateMoonPhaseByDate(new Date(2000, 0, 28))).toBe(
      "last-quarter"
    );
  });

  it("should return waning-crescent for a date between last quarter and new moon", () => {
    expect(calculateMoonPhaseByDate(new Date(2000, 1, 1))).toBe(
      "waning-crescent"
    );
  });
});
