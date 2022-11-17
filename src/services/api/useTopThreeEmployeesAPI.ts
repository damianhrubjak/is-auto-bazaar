import axios from "axios";

import { useQuery } from "@tanstack/react-query";

import { TopEmployee } from "@/types";

const fetchTopThreeEmployees = async (): Promise<TopEmployee[]> => {
    const { data } = await axios.get(
        "http://localhost:3000/top-three-employees-for-every-maintenance"
    );
    return data.data;
};

function useTopThreeEmployees() {
    return useQuery(
        ["top-three-employees-for-every-maintenance"],
        fetchTopThreeEmployees,
        {
            staleTime: 60 * 1000,
        }
    );
}
export default useTopThreeEmployees;
