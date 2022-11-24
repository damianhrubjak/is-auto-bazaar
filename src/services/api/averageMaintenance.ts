import axios from "axios";

import { useQuery } from "@tanstack/react-query";

import { AverageMaintenanc } from "@/types";

const fetchAverageMaintenance = async (): Promise<AverageMaintenanc[]> => {
    const { data } = await axios.get(
        "http://localhost:3000/average-maintenance"
    );
    return data.data;
};

function useAverageMaintenance() {
    return useQuery(["average-maintenance"], fetchAverageMaintenance, {
        staleTime: 60 * 1000,
    });
}
export default useAverageMaintenance;
