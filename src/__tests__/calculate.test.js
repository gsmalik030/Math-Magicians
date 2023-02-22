import calculate from '../logic/calculate';

describe('testing calculate function', () => {
  test(' return {total: null, next: null, operation: null} when buttonName is AC',
    () => {
      const obj = {
        total: null,
        next: null,
        operation: null,
      };
      const buttonName = 'AC';
      const result = calculate(obj, buttonName);
      expect(result).toEqual({
        total: null,
        next: null,
        operation: null,
      });
    });
  test(' return {total: null, next: 0, operation: null} when buttonName is 0',
    () => {
      const obj = {
        total: null,
        next: '0',
        operation: null,
      };
      const buttonName = '0';
      const result = calculate(obj, buttonName);
      expect(result).toEqual({});
    });
  test(' return {total: 8,next: null,operation: null} when buttonName is =', () => {
    const obj = {
      total: 3,
      next: 5,
      operation: '+',
    };
    const buttonName = '=';
    const result = calculate(obj, buttonName);
    expect(result).toEqual({
      total: '8',
      next: null,
      operation: null,
    });
  });
});
