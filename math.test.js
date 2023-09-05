
const { add, subtract, multiply, divide, power } = require('./math');

describe('math functions', () => {
  describe('add', () => {
    test('returns the sum of two numbers', () => {
      expect(add(2, 3)).toBe(5);
      expect(add(-2, 3)).toBe(1);
    });

    test('throws an error when passed non-number arguments', () => {
      expect(() => add('2', 3)).toThrowError('Invalid arguments: both parameters must be numbers');
      expect(() => add(2, '3')).toThrowError('Invalid arguments: both parameters must be numbers');
      expect(() => add('2', '3')).toThrowError('Invalid arguments: both parameters must be numbers');
    });
  });

  describe('subtract', () => {
    test('returns the difference of two numbers', () => {
      expect(subtract(3, 2)).toBe(1);
      expect(subtract(-2, -3)).toBe(1);
    });

    test('throws an error when passed non-number arguments', () => {
      expect(() => subtract('2', 3)).toThrowError('Invalid arguments: both parameters must be numbers');
      expect(() => subtract(2, '3')).toThrowError('Invalid arguments: both parameters must be numbers');
      expect(() => subtract('2', '3')).toThrowError('Invalid arguments: both parameters must be numbers');
    });
  });

  describe('multiply', () => {
    test('returns the product of two numbers', () => {
      expect(multiply(2, 3)).toBe(6);
      expect(multiply(-2, 3)).toBe(-6);
    });

    test('throws an error when passed non-number arguments', () => {
      expect(() => multiply('2', 3)).toThrowError('Invalid arguments: both parameters must be numbers');
      expect(() => multiply(2, '3')).toThrowError('Invalid arguments: both parameters must be numbers');
      expect(() => multiply('2', '3')).toThrowError('Invalid arguments: both parameters must be numbers');
    });
  });

  describe('divide', () => {
    test('returns the quotient of two numbers', () => {
      expect(divide(6, 2)).toBe(3);
      expect(divide(-6, 3)).toBe(-2);
    });

    test('throws an error when dividing by zero', () => {
      expect(() => divide(2, 0)).toThrowError('Cannot divide by zero');
    });

    test('throws an error when passed non-number arguments', () => {
      expect(() => divide('2', 3)).toThrowError('Invalid arguments: both parameters must be numbers');
      expect(() => divide(2, '3')).toThrowError('Invalid arguments: both parameters must be numbers');
      expect(() => divide('2', '3')).toThrowError('Invalid arguments: both parameters must be numbers');
    });
  });

  describe('power', () => {
    test('returns the result of raising a base to an exponent', () => {
      expect(power(2, 3)).toBe(8);
      expect(power(3, 0)).toBe(1);
      expect(power(-2, 2)).toBe(4);
      expect(power(2, -3)).toBe(0.125);
    });

    test('throws an error when passed non-number arguments', () => {
      expect(() => power('2', 3)).toThrowError('Invalid arguments: both parameters must be numbers');
      expect(() => power(2, '3')).toThrowError('Invalid arguments: both parameters must be numbers');
      expect(() => divide('2', '3')).toThrowError('Invalid arguments: both parameters must be numbers');
    });
  });

});
