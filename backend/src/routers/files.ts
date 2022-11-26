import express, { Request, Response } from "express";

import Database from "../database";

const files = express.Router();

interface ImageRow {
    id: number;
    name: string;
    image: Buffer;
}

files.get("/", async (req: Request, res: Response) => {
    const connection = await Database.getConnection();
    const queryResult = await connection?.execute(
        `select id_obr "id", nazov "name",MIME_TYPE "mime_type", obrazok "image" from WKSP_AUTOBAZAR.OBRAZKY_AUTA`
    );
    const images = (queryResult?.rows as ImageRow[])?.map((imageObj) => ({
        ...imageObj,
        image: imageObj.image.toString("base64"),
    }));
    res.json({ data: images });
});

export default files;
