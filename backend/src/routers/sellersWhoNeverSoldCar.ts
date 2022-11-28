import express, { Request, Response } from "express";

import Database from "../database";

const sellersWhoNeverSoldCar = express.Router();

sellersWhoNeverSoldCar.get("/", async (req: Request, res: Response) => {
    const connection = await Database.getConnection();
    const queryResult = await connection?.execute(
        `SELECT DISTINCT id_zamestnanca "id", rod_cislo "id_person", meno "name", priezvisko "surname" , ceil ( case when zamestnanec.dat_do is null then sysdate-zamestnanec.dat_od else zamestnanec.dat_do - zamestnanec.dat_od end ) "duration", case when  zamestnanec.dat_do is null then 1 else 0 end "actual" 
    FROM WKSP_AUTOBAZAR.zamestnanec
        JOIN WKSP_AUTOBAZAR.osoba USING(rod_cislo)
        left JOIN WKSP_AUTOBAZAR.inzerat USING(id_zamestnanca)
        WHERE 
            id_pozicie = 1 and inzerat.id_kupy is null
            GROUP BY id_zamestnanca, rod_cislo, meno, priezvisko,inzerat.dat_do,  ceil ( case when zamestnanec.dat_do is null then sysdate-zamestnanec.dat_od else zamestnanec.dat_do - zamestnanec.dat_od end ),case when  zamestnanec.dat_do is null then 1 else 0 end
            having count(id_inzeratu) = 0
                order by 5 ASC`
    );
    res.json({ data: queryResult?.rows });
});

export default sellersWhoNeverSoldCar;
