import express, { Request, Response } from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import Database from "./Database";

dotenv.config({ path: "../.env" });

const port = process.env.BACKEND_PORT;

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs)choke on 204
  })
);

app.get("/", async (req: Request, res: Response) => {
  const connection = await Database.getConnection();
  const queryResult = await connection?.execute(`select 'XXX' from dual`);
  res.json({ rows: queryResult?.rows });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
