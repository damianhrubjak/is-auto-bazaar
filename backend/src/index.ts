import cors from "cors";
import * as dotenv from "dotenv";
import express, { Response } from "express";

import employeesWithMostAds from "./routers/employeesWithMostAds";
import mostUsedMaintenances from "./routers/mostUsedMaintenances";

dotenv.config({ path: "../.env" });

const port = process.env.BACKEND_PORT;

const app = express();

app.use(
    cors({
        origin: process.env.FRONTEND_URL,
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs)choke on 204
    })
);

app.get("/", (_, res: Response) => {
    res.json({ message: "Server is running" });
});

app.use("/most-used-maintenances", mostUsedMaintenances);
app.use("/employees-with-most-ads", employeesWithMostAds);

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
