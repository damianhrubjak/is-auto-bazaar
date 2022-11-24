import express, { Request, Response } from "express";

import Database from "../database";

const randomEquipment = express.Router();

interface Row {
    equipment: string;
}

randomEquipment.get("/", async (req: Request, res: Response) => {
    const connection = await Database.getConnection();
    const queryResult = await connection?.execute(
        `SELECT
            JSON_OBJECTAGG(KEY skup_hodnota VALUE vybava_arr) AS "equipment"
        FROM
            (
                SELECT
                    skup_hodnota,
                    JSON_ARRAYAGG(vy_hodnota) vybava_arr
                FROM
                    (
                        SELECT
                            ROW_NUMBER()
                            OVER(PARTITION BY skup.skupina_id
                                ORDER BY
                                    skup.skupina_id
                            )            rn,
                            skup.hodnota skup_hodnota,
                            vy.hodnota   vy_hodnota
                        FROM
                                WKSP_AUTOBAZAR.vybava_pom_tab vy
                            JOIN WKSP_AUTOBAZAR.vybava_skupina_pom_tab skup ON ( skup.skupina_id = vy.skupina_id )
                    )
                WHERE
                        rn >= round(dbms_random.value(1, 10), 0)
                    AND rn <= round(dbms_random.value(1, 15), 0)
                GROUP BY
                    skup_hodnota
            )`
    );
    const equipmentJSON =
        queryResult?.rows !== undefined
            ? JSON.parse((queryResult?.rows[0] as Row).equipment)
            : null;

    res.json({
        equipment: equipmentJSON,
    });
});

export default randomEquipment;
