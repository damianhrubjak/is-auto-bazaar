import cors from "cors";
import * as dotenv from "dotenv";
import express, { Response } from "express";

import averageMaintenance from "./routers/averageMaintenance";
import countOfElectricVehiclesFromCountries from "./routers/countOfElectricVehiclesFromCountries";
import countOfVehiclesForEveryStateAndBrand from "./routers/countOfVehiclesForEveryStateAndBrand";
import customersWhoBoughtCar from "./routers/customersWhoBoughtCar";
import employeesWithMostAds from "./routers/employeesWithMostAds";
import files from "./routers/files";
import imagesOfAds from "./routers/imagesToAds";
import mostUsedMaintenances from "./routers/mostUsedMaintenances";
import peoplesWhoBoughtVehicleInGivenTime from "./routers/peoplesWhoBoughtVehicleInGivenTime";
import randomEquipment from "./routers/randomEquipment";
import sellersWhoNeverSoldCar from "./routers/sellersWhoNeverSoldCar";
import showVehiclesFromState from "./routers/showVehiclesFromState";
import topThreeEmployeesForEveryMaintenance from "./routers/topThreeEmployeesForEveryMaintenance";
import vehiclesInSpecificTime from "./routers/vehiclesInSpecificTime";

dotenv.config({ path: "../.env" });

const port = process.env.BACKEND_PORT;

const app = express();

app.use(
    cors({
        origin: process.env.FRONTEND_URL,
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs)choke on 204
    })
);

app.get("/", (_, res: Response) => {
    res.json({ message: "Server is running" });
});

app.use("/most-used-maintenances", mostUsedMaintenances);
app.use("/employees-with-most-ads", employeesWithMostAds);
app.use("/show-vehicles-from-state", showVehiclesFromState);
app.use(
    "/count-of-vehicles-for-every-state-and-brand",
    countOfVehiclesForEveryStateAndBrand
);
app.use(
    "/top-three-employees-for-every-maintenance",
    topThreeEmployeesForEveryMaintenance
);
app.use("/customers-who-bought-car", customersWhoBoughtCar);
app.use("/sellers-who-never-sold-car", sellersWhoNeverSoldCar);
app.use("/vehicles-in-specific-time", vehiclesInSpecificTime);
app.use(
    "/count-of-electric-vehicles-from-countries",
    countOfElectricVehiclesFromCountries
);
app.use("/average-maintenance", averageMaintenance);
app.use(
    "/peoples-who-bought-vehicle-in-given-time",
    peoplesWhoBoughtVehicleInGivenTime
);
app.use("/random-equipment", randomEquipment);
app.use("/files", files);
app.use("/images-of-ads", imagesOfAds);

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
