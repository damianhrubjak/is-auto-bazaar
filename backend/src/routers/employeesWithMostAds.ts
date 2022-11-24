import express, { Request, Response } from "express";

import Database from "../database";

const employeesWithMostAds = express.Router();

employeesWithMostAds.get("/", async (req: Request, res: Response) => {
    const connection = await Database.getConnection();
    const queryResult = await connection?.execute(
        `SELECT 
            rod_cislo as "rod_cislo" ,
            meno as "meno" ,
            priezvisko as "priezvisko" ,
            pocet_predajov as "pocet_predajov"
        FROM (
            SELECT
                row_number() over(order by count(id_inzeratu) desc) rn,
                rod_cislo,
                meno,
                priezvisko, 
                COUNT(id_inzeratu) pocet_predajov
            FROM WKSP_AUTOBAZAR.zamestnanec
            JOIN WKSP_AUTOBAZAR.osoba USING(rod_cislo)
            JOIN WKSP_AUTOBAZAR.inzerat USING(id_zamestnanca)
            WHERE inzerat.id_kupy IS NOT NULL
            GROUP BY rod_cislo, meno, priezvisko
        )
        WHERE rn < 4`
    );
    res.json({ data: queryResult?.rows });
});

export default employeesWithMostAds;
