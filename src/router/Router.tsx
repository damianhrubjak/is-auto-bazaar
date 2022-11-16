import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import NavBar from "@/components/NavBar";
import AppLayout from "@/layouts/AppLayout";
import Home from "@/pages/Home";
import Report from "@/pages/Report";

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
            { path: "report", element: <Report /> },
        ],
    },
]);

function Router() {
    return <RouterProvider router={router} />;
}

export default Router;
