const getSum = require("../sum")

describe('sum', () => {
    it('should return sum of two numbers', () => {
        const num1 = 2;
        const num2 = 2;
        const result = getSum(num1, num2);

        expect(result).toBe(4);
    })
})