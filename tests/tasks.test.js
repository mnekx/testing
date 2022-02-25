import { stringLength, reverseString } from "../tasks.js";
import Calculator from "../calculator";
import capitalize from "../capitalize_fun.js";

const calc = new Calculator();

describe("String Length", () => {
  test('"string" should return 6', () => {
    expect(stringLength("string")).toBe(6);
  });

  test('"" should return -1', () => {
    expect(stringLength("")).toBe(-1);
  });

  test('"string longer than 10 chars returns -1"', () => {
    expect(stringLength("123456789011")).toBe(-1);
  });
});

describe("Reversed String", () => {
  test('"me" should return "em"', () => {
    expect(reverseString("me")).toMatch(/^em$/);
  });
});

describe("Calculator add", () => {
  test("1 + 2 = 3", () => {
    expect(calc.add(1, 2)).toBe(3);
  });

  test("0.1 + 0.2 = 0.3", () => {
    expect(calc.add(0.1, 0.2)).toBe(0.3);
  });

  test("100 + 200 = 300", () => {
    expect(calc.add(100, 200)).toBe(300);
  });
});

describe("Calculator Subtract", () => {
  test("2 - 1 = 1", () => {
    expect(calc.subtract(2, 1)).toBe(1);
  });
  test("200 - 100 = 100", () => {
    expect(calc.subtract(200, 100)).toBe(100);
  });
  test("0.2 - 0.1 = 0.1", () => {
    expect(calc.subtract(0.2, 0.1)).toBe(0.1);
  });
});

describe("Calculator Multiply", () => {
  test("0.1 * 10 = 1", () => {
    expect(calc.multiply(0.1, 10)).toBe(1);
  });
  test("1 * 2 = 2", () => {
    expect(calc.multiply(1, 2)).toBe(2);
  });
  test("10 * 20 = 200", () => {
    expect(calc.multiply(10, 20)).toBe(200);
  });
});

describe("Calculator Devide", () => {
  test("10 / 2 = 5", () => {
    expect(calc.devide(10, 2)).toBe(5);
  });
  test("0.2 / 2 = 0.1", () => {
    expect(calc.devide(0.2, 2)).toBe(0.1);
  });
  test("1000 / 10 = 100", () => {
    expect(calc.devide(1000, 10)).toBe(100);
  });
});

describe("Capitalize", () => {
  test('"string" should be returned as "String"', () => {
    expect(capitalize("string")).toMatch(/^String$/);
  });

  test('"" should return ""', () => {
    expect(capitalize("")).toMatch(/^$/);
  });

  test('a number passed should return ""', () => {
    expect(capitalize(2)).toMatch(/^$/);
  });
});
