import express, { Request, Response } from "express";

import Database from "../database";

const countOfElectricVehiclesFromCountries = express.Router();

countOfElectricVehiclesFromCountries.get(
    "/",
    async (req: Request, res: Response) => {
        const connection = await Database.getConnection();
        const queryResult = await connection?.execute(
            `select s.nazov "country", count(v.id_vozidla) "count" from WKSP_AUTOBAZAR.vozidlo v
                join WKSP_AUTOBAZAR.typ_hmoty th using(id_hmoty)
                join WKSP_AUTOBAZAR.stat s on (v.krajina_povodu = s.id_statu)
                    where v.id_vozidla in (select id_vozidla from WKSP_AUTOBAZAR.inzerat
                        where id_kupy is not null)
                    and th.nazov_poh_hmoty like 'Elektricka energia'
                        group by s.nazov
                            order by 2 Desc`
        );

        res.json({ data: queryResult?.rows });
    }
);

export default countOfElectricVehiclesFromCountries;
