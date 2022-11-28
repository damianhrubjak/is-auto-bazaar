import express, { Request, Response } from "express";

import Database from "../database";

const showVehiclesFromState = express.Router();

interface Row {
    value: string;
}

showVehiclesFromState.get("/", async (req: Request, res: Response) => {
    const fromState = String(req.query.state || "SK");
    const countOfMaintenances = Number(req.query.count || 0);

    const connection = await Database.getConnection();
    const queryResult = await connection?.execute(
        `SELECT WKSP_AUTOBAZAR.vypis_vozidla_z_krajiny('${fromState}', ${countOfMaintenances}) "value" from dual`
    );

    const jsonValue =
        queryResult?.rows === undefined
            ? ""
            : (queryResult?.rows[0] as Row).value;

    res.json({ data: JSON.parse(jsonValue) });
});

export default showVehiclesFromState;
