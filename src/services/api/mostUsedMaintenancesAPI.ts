import axios from "axios";

import { useQuery } from "@tanstack/react-query";

import { MostUsedMaintenance } from "@/types";

const fetchMostUsedMaintenances = async (): Promise<MostUsedMaintenance[]> => {
    const { data } = await axios.get(
        "http://localhost:3000/most-used-maintenances"
    );
    return data.data;
};

function useMostUsedMaintenances() {
    return useQuery(["most-used-maintenances"], fetchMostUsedMaintenances, {
        staleTime: 60 * 1000,
    });
}
export default useMostUsedMaintenances;
