import express, { Request, Response } from "express";

import Database from "../Database";

const customersWhoBoughtCar = express.Router();

customersWhoBoughtCar.get("/", async (req: Request, res: Response) => {
    const brandName = String(req.query.brand || "BMW");
    const price = Number(req.query.price) || 5000;

    const connection = await Database.getConnection();
    const queryResult = await connection?.execute(
        `select osoba.rod_cislo, osoba.meno, osoba.priezvisko, vozidlo.id_vozidla, inzerat.cena,
        znacka_vozidla.nazov, model_vozidla.nazov
            from WKSP_AUTOBAZAR.osoba
                join WKSP_AUTOBAZAR.zakaznik on(osoba.rod_cislo = zakaznik.rod_cislo)
                join WKSP_AUTOBAZAR.kupa on(zakaznik.id_zakaznika = kupa.id_kupy)
                join WKSP_AUTOBAZAR.inzerat on(inzerat.id_kupy = kupa.id_kupy)
                join WKSP_AUTOBAZAR.vozidlo on(inzerat.id_vozidla = vozidlo.id_vozidla)
                join WKSP_AUTOBAZAR.model_vozidla on(model_vozidla.id_modelu = vozidlo.id_modelu)
                join WKSP_AUTOBAZAR.znacka_vozidla on(znacka_vozidla.id_znacky = model_vozidla.id_znacky)
                    where inzerat.cena > ${price} and lower(znacka_vozidla.nazov) like '${brandName.toLowerCase()}'
                        and not exists(select 'x' from WKSP_AUTOBAZAR.udrzba where udrzba.id_vozidla = vozidlo.id_vozidla)`
    );

    res.json({ data: queryResult?.rows });
});

export default customersWhoBoughtCar;
