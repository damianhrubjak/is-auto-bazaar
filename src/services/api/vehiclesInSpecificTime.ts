import axios from "axios";

import { useQuery } from "@tanstack/react-query";

import { VehicleInSpecificTime } from "@/types";

const fetchVehiclesInSpecificTime = async (
    from: string,
    to: string
): Promise<VehicleInSpecificTime[]> => {
    const { data } = await axios.get(
        `http://localhost:3000/vehicles-in-specific-time?from=${from}&to=${to}`
    );
    return data.data;
};

function useVehiclesInSpecificTime(from = "2000-01-01", to = "2022-01-01") {
    return useQuery(
        ["vehicles-in-specific-time", from, to],
        async () => fetchVehiclesInSpecificTime(from, to),
        {
            staleTime: 60 * 1000,
            select: (data) => data.slice(0, 200),
        }
    );
}
export default useVehiclesInSpecificTime;
