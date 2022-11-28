import express, { Request, Response } from "express";

import Database from "../database";

const imagesOfAds = express.Router();

interface Row {
    advertisement: string;
    name: string;
    image: Buffer;
    mime_type: string;
}

imagesOfAds.get("/", async (req: Request, res: Response) => {
    const advertisementId = Number(req.query.id || 20000);

    const connection = await Database.getConnection();
    const queryResult = await connection?.execute(
        `SELECT
                JSON_OBJECT
            ('vin' VALUE v.id_vozidla, 'color' VALUE v.farba, 'brand' VALUE z.nazov, 'model' VALUE m.nazov) as "advertisement",
                o.nazov as "name",
                o.obrazok as "image",
                o.mime_type as "mime_type"
        FROM
                WKSP_AUTOBAZAR.inzerat_obr_auta io
            JOIN WKSP_AUTOBAZAR.inzerat        i ON ( i.id_inzeratu = io.id_inzeratu )
            JOIN WKSP_AUTOBAZAR.obrazky_auta   o ON ( o.id_obr = io.id_obr )
            JOIN WKSP_AUTOBAZAR.vozidlo        v ON ( i.id_vozidla = v.id_vozidla )
            JOIN WKSP_AUTOBAZAR.model_vozidla  m ON ( m.id_modelu = v.id_modelu )
            JOIN WKSP_AUTOBAZAR.znacka_vozidla z ON ( z.id_znacky = m.id_znacky )
        WHERE
            i.id_inzeratu = ${advertisementId}`
    );

    const data = queryResult?.rows?.map((imageObj) => {
        const value = imageObj as Row;
        return {
            ...value,
            image: value.image.toString("base64"),
            advertisement: JSON.parse(value.advertisement),
        };
    });
    res.json({ data: data });
});

export default imagesOfAds;
