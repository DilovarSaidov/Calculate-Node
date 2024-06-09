import request from "supertest";
import express from "express";
import router from "../router/CalculateRoter"; // Подключаем ваш роутер
const app = express();

app.use(express.json());
app.use(router);

describe("Calculate Route", () => {
  it("should handle POST request to /calculate", async () => {
    const response = await request(app)
      .post("/calculate")
      .send({ expression: "2 + 2" });

    expect(response.status).toBe(200);
    expect(response.text).toContain("Результат");
  });
});
