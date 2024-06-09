import { Request, Response } from "express";
import CalculateModel from "../model/CalculateModel";

export default class CalculateController {
  static async calculate(req: Request, res: Response) {
    const input = req.body.expression;

    try {
      const result = await CalculateModel.Calculate(input);
      return res.send(`Результат: ${result}`);
    } catch (error) {
      console.error(error);
      return res.send("Внутренняя ошибка сервера").status(500);
    }
  }
}
