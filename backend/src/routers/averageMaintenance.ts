import express, { Request, Response } from "express";

import Database from "../Database";

const averageMaintenance = express.Router();

averageMaintenance.get("/", async (req: Request, res: Response) => {
    const connection = await Database.getConnection();
    const queryResult = await connection?.execute(
        `select id_vozidla "vin", sum(trunc(dat_do-dat_od)) "count_od_days" from WKSP_AUTOBAZAR.udrzba
            where dat_do is not null
                group by id_vozidla
                    order by 2 DESC`
    );

    res.json({ data: queryResult?.rows });
});

export default averageMaintenance;
