import express, { Request, Response } from "express";

import Database from "../Database";

const vehiclesInSpecificTime = express.Router();

vehiclesInSpecificTime.get("/", async (req: Request, res: Response) => {
    const fromDate = String(req.query.from || "2000-01-01");
    const toDate = String(req.query.to || "2022-01-01");

    console.log(fromDate, toDate);
    console.log(
        `select * from table(WKSP_AUTOBAZAR.daj_vozidla_predane_v_danom_intervale(to_date(${fromDate}, 'YYYY-MM-DD'), to_date(${toDate}, 'YYYY-MM-DD')))`
    );

    const connection = await Database.getConnection();
    const queryResult = await connection?.execute(
        `select VIN "vin" ,
DAT_VYROBY "manufacturer_date" ,
OBJ_MOTORA "engine_capacity" ,
VYKON_MOTORA "engine_power" ,
FARBA "color" ,
VYBAVA "equipment" ,
NAZOV_POH_HMOTY "fuel" ,
KRAJINA "country" ,
ZNACKA "brand" ,
MODEL_AUTA "model" from table(WKSP_AUTOBAZAR.daj_vozidla_predane_v_danom_intervale(to_date('${fromDate}', 'YYYY-MM-DD'), to_date('${toDate}', 'YYYY-MM-DD')))`
    );
    res.json({ data: queryResult?.rows });
});

export default vehiclesInSpecificTime;
