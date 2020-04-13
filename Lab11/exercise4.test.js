const filterByTerm = require('./exercise4.js')

describe("Multiply odd number by previous even number", () => {
    test("It should return an array of the sum of odd numbers * previous even number", () => {
        const input = [2, 33, 4, 41, 6, 9, 77, 11, 13, 27];
        
        const output = [66, 164, 54, 462, 66, 78, 162];
        
        expect(filterByTerm(input)).toEqual(output);
    
    });
});
