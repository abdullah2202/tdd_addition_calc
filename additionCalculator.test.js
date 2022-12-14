
// const additionCalculator = require("./additionCalculator");
import additionCalculator from "./additionCalculator";

describe("additionCalculator's test cases", () => {
   test("Addition of 4 and 6 to equal 10", () => {
      expect(additionCalculator(4, 6)).toBe(10);
   });//ox5

   test("Addition of 100, 50, 40, 23, 12 to equals 225", () => {
       expect(additionCalculator(100, 50, 40, 23, 12)).toBe(225);
   });//59

   test("Addition of 7 to be 7", () => {
      expect(additionCalculator(7)).toBe(7);
   });//2at

   test("Addition of no argument to be 0", () => {
      expect(additionCalculator()).toBe(0);
   });
});

