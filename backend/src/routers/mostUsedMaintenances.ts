import express, { Request, Response } from "express";

import Database from "../Database";

const mostUsedMaintenances = express.Router();

mostUsedMaintenances.get("/", async (req: Request, res: Response) => {
    const connection = await Database.getConnection();
    const queryResult = await connection?.execute(
        `select rank() over(order by pocet desc) as "pozicia",pocet as "pocet", popis as "popis"
            from (select count(popis) pocet, popis from WKSP_AUTOBAZAR.udrzba group by popis)`
    );
    res.json({ data: queryResult?.rows });
});

export default mostUsedMaintenances;
