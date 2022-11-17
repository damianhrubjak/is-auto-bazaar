import express, { Request, Response } from "express";

import Database from "../Database";

const showVehiclesFromState = express.Router();

showVehiclesFromState.get("/", async (req: Request, res: Response) => {
    const fromState = String(req.query.state || "SK");
    const countOfMaintenances = Number(req.query.count || 0);

    const connection = await Database.getConnection();
    const queryResult = await connection?.execute(
        `SELECT * FROM TABLE(WKSP_AUTOBAZAR.vypis_vozidla_z_krajiny('${fromState}', ${countOfMaintenances}))`
    );
    res.json({ data: queryResult?.rows });
});

export default showVehiclesFromState;
