
const additionCalculator = require("./additionCalculator");

test("Addition of 4 and 6 to equal 10", () => {
   expect(additionCalculator(4, 6)).toBe(10);
});