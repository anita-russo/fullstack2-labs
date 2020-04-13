const removeVowels = require('./exercise2')

describe("Remove Vowels Function", () => {
  test("It should return a string with the vowels removed", () => {
    const input = "A dog is a friendly pet if it’s trained properly"

    const output = " dg s  frndly pt f t’s trnd prprly"

    expect(removeVowels(input)).toEqual(output);

  });
});
