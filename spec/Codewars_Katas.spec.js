const opposite = require('../Codewars_Katas/Opposite_number');
const removeChar = require('../Codewars_Katas/Remove_First_and_Last_Character');
const repeatStr = require('../Codewars_Katas/String_repeat');
const positiveSum = require('../Codewars_Katas/Sum_of_positive');

describe("Codewars Kata's Tests:", () => {

  test('function that finds opposite value of integer or a floating-point number', () => {
    expect(opposite(-1)).toBe(1);
    expect(opposite(454)).toBe(-454);
    expect(opposite(0)).toBe(0);
    expect(opposite(-98.2)).toBe(98.2);
    expect(opposite(0.12)).toBe(-0.12);
  });

  test('function that removes the first and last characters of a string', () => {
    expect(removeChar('Hello')).toBe('ell');
    expect(removeChar('Hi')).toBe('');
    expect(removeChar('Good Morning!')).toBe('ood Morning');
    expect(removeChar(' Stop It! ')).toBe('Stop It!');
    expect(removeChar('#add#')).toBe('add');
  });

  test('function that repeats the given string exactly n times', () => {
    expect(repeatStr(6, 'I')).toBe('IIIIII');
    expect(repeatStr(4, 'Hello')).toBe('HelloHelloHelloHello');
    expect(repeatStr(5, '')).toBe('');
    expect(repeatStr(3, ' _')).toBe(' _ _ _');
    expect(repeatStr(7, '21')).toBe('21212121212121');
  });

  test('function that returns the sum of all of the positives numbers from array', () => {
    const testArr = [[1, 2, 3, -4], [1, 2, 0, 5], [0, -1, -2, -3], ['1', 2, 3, 4, 5], [1.2, -2, -3, 100]];
    const testAnswers = [6, 8, 0, 14, 101.2];
    let i = 0;
    while (i < 5){
      expect(positiveSum(testArr[i])).toBe(testAnswers[i]);
      i++;
    }
  });

});






