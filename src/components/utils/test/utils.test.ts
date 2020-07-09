import { calculateOperation, addPoints } from "../utils";

describe("UTILS", () => {
  it("testing calculation operation", () => {
    let result = calculateOperation("6+5+2");
    expect(result).toEqual(13);
    result = calculateOperation("6-5+2");
    expect(result).toEqual(3);
    result = calculateOperation("6-5-2");
    expect(result).toEqual(-1);
    result = calculateOperation("6x6");
    expect(result).toEqual(36);
    result = calculateOperation("8÷2");
    expect(result).toEqual(4);
  });

  it("testing adding points", () => {
    let result = addPoints("1234");
    expect(result).toEqual("1.234");
    result = addPoints("12345");
    expect(result).toEqual("12.345");
    result = addPoints("123456");
    expect(result).toEqual("123.456");
  });
});
