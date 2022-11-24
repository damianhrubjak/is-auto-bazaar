import express, { Request, Response } from "express";

import Database from "../database";

const sellersWhoNeverSoldCar = express.Router();

sellersWhoNeverSoldCar.get("/", async (req: Request, res: Response) => {
    const connection = await Database.getConnection();
    const queryResult = await connection?.execute(
        `SELECT DISTINCT id_zamestnanca "id", rod_cislo "id_osoba", meno "name", priezvisko "surname" FROM WKSP_AUTOBAZAR.zamestnanec
        JOIN WKSP_AUTOBAZAR.osoba USING(rod_cislo)
        JOIN WKSP_AUTOBAZAR.inzerat USING(id_zamestnanca)
        WHERE 
            id_pozicie = 1
            GROUP BY id_zamestnanca, rod_cislo, meno, priezvisko
            HAVING 
                COUNT(id_inzeratu) > 0 AND MAX(id_kupy) IS NULL`
    );
    res.json({ data: queryResult?.rows });
});

export default sellersWhoNeverSoldCar;
