import express, { Request, Response } from "express";

import Database from "../Database";

interface Row {
    year: string;
}
const countOfVehiclesForEveryStateAndBrand = express.Router();

countOfVehiclesForEveryStateAndBrand.get(
    "/",
    async (req: Request, res: Response) => {
        const connection = await Database.getConnection();
        const queryResult = await connection?.execute(
            `SELECT
                JSON_OBJECT(
                    'year' VALUE rok,
                    'brands' VALUE JSON_ARRAYAGG(
                        JSON_OBJECT(
                            'brand' VALUE nazov,
                            'count' VALUE pocet
                            returning clob
                        )
                        returning clob
                    )
                ) as "year"
                FROM
                    (
                        SELECT
                            COUNT(v.id_vozidla)     pocet,
                            extract(year from v.dat_vyroby) rok,
                            znacka_vozidla.nazov          nazov
                        FROM
                                WKSP_AUTOBAZAR.znacka_vozidla
                            JOIN WKSP_AUTOBAZAR.model_vozidla m USING ( id_znacky )
                            JOIN WKSP_AUTOBAZAR.vozidlo v on ( v.id_modelu = m.id_modelu)
                        GROUP BY
                            extract(year from v.dat_vyroby),
                            znacka_vozidla.nazov
                    )
                GROUP BY
                    rok`
        );

        const data = (queryResult?.rows as Row[]).map((row) => {
            return JSON.parse(row.year);
        });

        res.json({ data: data });
    }
);

export default countOfVehiclesForEveryStateAndBrand;
