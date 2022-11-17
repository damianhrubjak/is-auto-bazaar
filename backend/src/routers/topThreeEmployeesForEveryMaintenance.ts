import express, { Request, Response } from "express";

import Database from "../Database";

const topThreeEmployeesForEveryMaintenance = express.Router();

topThreeEmployeesForEveryMaintenance.get(
    "/",
    async (req: Request, res: Response) => {
        const connection = await Database.getConnection();
        const queryResult = await connection?.execute(
            `select popis, meno, priezvisko, pocet from(
        select row_number() over(partition by popis order by pocet desc) rn, id_zamestnanca, popis, pocet, meno, priezvisko
            from(
                select distinct popis, id_zamestnanca, count(id_zamestnanca) pocet, meno, priezvisko from WKSP_AUTOBAZAR.udrzba
                    join WKSP_AUTOBAZAR.zamestnanec using(id_zamestnanca)
                    join WKSP_AUTOBAZAR.osoba using(rod_cislo)
                group by popis, id_zamestnanca, meno, priezvisko
            )) where rn < 4`
        );
        res.json({ data: queryResult?.rows });
    }
);

export default topThreeEmployeesForEveryMaintenance;
