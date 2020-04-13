const filterByTerm = require('./exercise3.js')

describe("Remove unauthorized function", () => {
    test("It should filter out objects with authenticated key set to false", () => {
        const input = [
            {id:1001, authenticated:false},
            {id:1010, authenticated:true},
            {id:1011, authenticated:false},
            {id:1100, authenticated:true},
            {id:1101, authenticated:false}
        ]
        
        const output = [
            {id:1010, authenticated:true},
            {id:1100, authenticated:true}
        ];
        
        expect(filterByTerm(input)).toEqual(output);
    
    });
});
