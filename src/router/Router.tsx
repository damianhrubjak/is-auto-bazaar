import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import NavBar from "@/components/NavBar";
import AppLayout from "@/layouts/AppLayout";
import CountOfVehiclesForEveryStateAndBrand from "@/pages/CountOfVehiclesForEveryStateAndBrand";
import CustomersWhoBoughtCar from "@/pages/CustomersWhoBoughtCar";
import EmployeesWithMostAds from "@/pages/EmployeesWithMostAds";
import Home from "@/pages/Home";
import MostUsedMaintenances from "@/pages/MostUsedMaintenances";
import TopThreeEmployees from "@/pages/TopThreeEmployees";
import VehiclesFromState from "@/pages/VehiclesFromState";

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
        ],
    },
]);

function Router() {
    return <RouterProvider router={router} />;
}

export default Router;
