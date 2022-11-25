import express, { Request, Response } from "express";

import Database from "../database";

const peoplesWhoBoughtVehicleInGivenTime = express.Router();

peoplesWhoBoughtVehicleInGivenTime.get(
    "/",
    async (req: Request, res: Response) => {
        const inputDate = String(req.query.date || "2006-04-03");

        const connection = await Database.getConnection();
        const queryResult = await connection?.execute(
            `select rod_cislo "id_number", meno "name", priezvisko "surname", vin "car_id", datum_kupy "date_of_purchase" from table(WKSP_AUTOBAZAR.zakaznici_z_kupy_pre_dany_mesiac(to_date('${inputDate}', 'YYYY-MM-DD')))`
        );
        res.json({ data: queryResult?.rows });
    }
);

export default peoplesWhoBoughtVehicleInGivenTime;
