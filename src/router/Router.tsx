import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import NavBar from "@/components/NavBar";
import AppLayout from "@/layouts/AppLayout";
import EmployeesWithMostAds from "@/pages/EmployeesWithMostAds";
import Home from "@/pages/Home";
import MostUsedMaintenances from "@/pages/MostUsedMaintenances";
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
        ],
    },
]);

function Router() {
    return <RouterProvider router={router} />;
}

export default Router;
