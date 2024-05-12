import {describe, expect, test, it} from '@jest/globals';
import {multiply, sum} from '../index';

describe('sum module', () => {
  test('should adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});


describe('multiply module',()=>{
    test("should test multiply",()=>{
        expect(multiply(1,2)).toBe(2);
    })
})