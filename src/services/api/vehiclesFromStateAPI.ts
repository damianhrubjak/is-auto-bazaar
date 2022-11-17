import axios from "axios";

import { useQuery } from "@tanstack/react-query";

const fetchVehiclesFromState = async (
    state: string,
    maintenancesCount: number
): Promise<{ vin: string }[]> => {
    const { data } = await axios.get(
        `http://localhost:3000/show-vehicles-from-state?state=${state}&count=${maintenancesCount}`
    );
    return data.data;
};

function useVehiclesFromState(state = "SK", maintenancesCount = 0) {
    return useQuery(
        ["show-vehicles-from-state", state, maintenancesCount],
        async () => fetchVehiclesFromState(state, maintenancesCount),
        {
            staleTime: 60 * 1000,
        }
    );
}
export default useVehiclesFromState;
