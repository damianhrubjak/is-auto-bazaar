import express, { Request, Response } from "express";

import Database from "../Database";

const countOfElectricVehiclesFromCountries = express.Router();

countOfElectricVehiclesFromCountries.get(
    "/",
    async (req: Request, res: Response) => {
        const connection = await Database.getConnection();
        const queryResult = await connection?.execute(
            `select v.krajina_povodu "country", count(v.id_vozidla) "count" from WKSP_AUTOBAZAR.vozidlo v
                join WKSP_AUTOBAZAR.typ_hmoty th using(id_hmoty)
                    where v.id_vozidla in (select id_vozidla from WKSP_AUTOBAZAR.inzerat
                        where id_kupy is not null)
                    and th.nazov_poh_hmoty like 'Elektricka energia'
                        group by v.krajina_povodu`
        );

        res.json({ data: queryResult?.rows });
    }
);

export default countOfElectricVehiclesFromCountries;
