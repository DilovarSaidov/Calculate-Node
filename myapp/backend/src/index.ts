import express from "express";
import cors from "cors";
import bodyParser, { json } from "body-parser";
import CalculateRouter from "./router/CalculateRoter";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(CalculateRouter);

app.listen(port, () => {
  console.log(`Port: ${port}`);
});
