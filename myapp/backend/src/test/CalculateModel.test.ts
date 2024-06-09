import CalculateModel from "../model/CalculateModel";

describe("CalculateModel", () => {
  describe("Calculate", () => {
    it("should correctly evaluate a valid expression", async () => {
      const result = await CalculateModel.Calculate("2 + 2");
      expect(result).toEqual(4);
    });

    it("should handle division by zero", async () => {
      const result = await CalculateModel.Calculate("1 / 0");
      expect(result).toEqual(Infinity);
    });

    it("should handle invalid expressions", async () => {
      const result = await CalculateModel.Calculate("abc * 123");
      expect(result).toEqual("Ошибка в выражении");
    });

    it("should handle other errors gracefully", async () => {
      const result = await CalculateModel.Calculate(
        'throw new Error("Test Error")'
      );
      expect(result).toEqual("Ошибка в выражении");
    });
  });
});
