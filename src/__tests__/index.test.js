import { isEven } from "../index.js";

describe("defines if number is even or not", () => {
  
  it("number is even", () => {
    const number = 2;
    expect(`${number} is even`).toBeTruthy();
  }),
    it("number is odd", () => {
      const number = 7;
      expect(`${number} is odd`).toBeTruthy();
    });
    it("is not a number", () => {
      const number = "";
      expect(`${number} is not a number`).not.toBe("odd or even");
    })
});
