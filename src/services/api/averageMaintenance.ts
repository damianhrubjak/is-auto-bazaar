import axios from "axios";

import { useQuery } from "@tanstack/react-query";

import { AverageMaintenance } from "@/types";

const fetchAverageMaintenance = async (): Promise<AverageMaintenance[]> => {
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
