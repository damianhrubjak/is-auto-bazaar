import express, { Request, Response } from "express";

import Database from "../database";

const averageMaintenance = express.Router();

averageMaintenance.get("/", async (req: Request, res: Response) => {
    const connection = await Database.getConnection();
    const queryResult = await connection?.execute(
        `select v.id_vozidla "vin", s.naZov "country", v.farba "color", m.nazov "model", z.nazov "brand", ceil( avg(trunc(dat_do-dat_od)) ) "count_of_days"
        from WKSP_AUTOBAZAR.udrzba u
            join WKSP_AUTOBAZAR.vozidlo v on (v.id_vozidla = u.id_vozidla)
            join WKSP_AUTOBAZAR.stat s on (s.id_statu = v.KRAJINA_POVODU)
            join WKSP_AUTOBAZAR.model_vozidla m on(v.ID_MODELU = m.id_modelu)
            join WKSP_AUTOBAZAR.znacka_vozidla z on(z.id_znacky = m.id_znacky)
        where dat_do is not null
        group by v.id_vozidla, s.naZov, v.farba, m.nazov, z.nazov
            order by 6 DESC`
    );

    res.json({ data: queryResult?.rows });
});

export default averageMaintenance;
