import { Request, Response } from "express";
import CalculateController from "../controller/CalculateController";
import CalculateModel from "../model/CalculateModel";

const mockRequest = () => {
  return {
    body: {
      expression: "2 + 2",
    },
  } as Request;
};

const mockResponse = () => {
  const res = {} as Response;
  res.send = jest.fn().mockReturnValue(res);
  res.status = jest.fn().mockReturnValue(res);
  return res;
};

describe("CalculateController", () => {
  it("should calculate the expression and send the result in the response", async () => {
    const req = mockRequest();
    const res = mockResponse();

    const calculateSpy = jest
      .spyOn(CalculateModel, "Calculate")
      .mockResolvedValue(4);

    await CalculateController.calculate(req, res);

    expect(calculateSpy).toHaveBeenCalledWith(req.body.expression);
    expect(res.send).toHaveBeenCalledWith("Результат: 4");
    expect(res.status).not.toHaveBeenCalled();
  });

  it("should handle internal server errors", async () => {
    const req = mockRequest();
    const res = mockResponse();

    const error = new Error("Test Error");
    jest.spyOn(CalculateModel, "Calculate").mockRejectedValue(error);

    const consoleSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});

    await CalculateController.calculate(req, res);

    expect(consoleSpy).toHaveBeenCalledWith(error);
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.send).toHaveBeenCalledWith("Внутренняя ошибка сервера");
  });
});
