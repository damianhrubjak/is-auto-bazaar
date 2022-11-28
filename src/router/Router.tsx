import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import NavBar from "@/components/NavBar";
import AppLayout from "@/layouts/AppLayout";
import AdsWithImages from "@/pages/AdsWithImages";
import AverageMaintenances from "@/pages/AverageMaintenances";
import CountOfElectricVehiclesFromCountries from "@/pages/CountOfElectricVehiclesFromCountries";
import CountOfVehiclesForEveryStateAndBrand from "@/pages/CountOfVehiclesForEveryStateAndBrand";
import CustomersWhoBoughtCar from "@/pages/CustomersWhoBoughtCar";
import EmployeesWithMostAds from "@/pages/EmployeesWithMostAds";
import Home from "@/pages/Home";
import Images from "@/pages/Images";
import MostUsedMaintenances from "@/pages/MostUsedMaintenances";
import PeoplesWhoBoughtVehicleInGivenTime from "@/pages/PeoplesWhoBoughtVehicleInGivenTime";
import RandomEquipment from "@/pages/RandomEquipment/RandomEquipment";
import SellersWhoNeverSoldCar from "@/pages/SellersWhoNeverSoldCar";
import TopThreeEmployees from "@/pages/TopThreeEmployees";
import VehiclesFromState from "@/pages/VehiclesFromState";
import VehiclesInSpecificTime from "@/pages/VehiclesInSpecificTime";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <NavBar />
                <AppLayout>
                    <Outlet />
                </AppLayout>
            </>
        ),
        children: [
            { index: true, element: <Home /> },
            {
                path: "most-used-maintenances",
                element: <MostUsedMaintenances />,
            },
            {
                path: "employees-with-most-ads",
                element: <EmployeesWithMostAds />,
            },
            {
                path: "show-vehicles-from-state",
                element: <VehiclesFromState />,
            },
            {
                path: "count-of-vehicles-for-every-state-and-brand",
                element: <CountOfVehiclesForEveryStateAndBrand />,
            },
            {
                path: "top-three-employees-for-every-maintenance",
                element: <TopThreeEmployees />,
            },
            {
                path: "customers-who-bought-car",
                element: <CustomersWhoBoughtCar />,
            },
            {
                path: "sellers-who-never-sold-car",
                element: <SellersWhoNeverSoldCar />,
            },
            {
                path: "vehicles-in-specific-time",
                element: <VehiclesInSpecificTime />,
            },
            {
                path: "count-of-electric-vehicles-from-countries",
                element: <CountOfElectricVehiclesFromCountries />,
            },
            {
                path: "average-maintenance",
                element: <AverageMaintenances />,
            },
            {
                path: "peoples-who-bought-vehicle-in-given-time",
                element: <PeoplesWhoBoughtVehicleInGivenTime />,
            },
            {
                path: "random-equipment",
                element: <RandomEquipment />,
            },
            {
                path: "images",
                element: <Images />,
            },
            {
                path: "ads-with-images",
                element: <AdsWithImages />,
            },
        ],
    },
]);

function Router() {
    return <RouterProvider router={router} />;
}

export default Router;
