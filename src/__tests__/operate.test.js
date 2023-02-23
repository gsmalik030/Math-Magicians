import operate from '../logic/operate';

describe('test operate function', () => {
  test('expect 10 + 10 to be "20"', () => {
    expect(operate(10, 10, '+')).toBe('20');
  });
  test('expect 10 - 5 to be "5"', () => {
    expect(operate(10, 5, '-')).toBe('5');
  });
  test('expect 86x 6 to be "36"', () => {
    expect(operate(6, 6, 'x')).toBe('36');
  });
  test('expect 13 ÷ 0 to be "Not divisable by 0."', () => {
    expect(operate(1, 0, '÷')).toBe("Can't divide by 0.");
  });
  test('expect 100 % 5 to be "0"', () => {
    expect(operate(100, 5, '%')).toBe('0');
  });
});
