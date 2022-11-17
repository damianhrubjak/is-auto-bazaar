import axios from "axios";

import { useQuery } from "@tanstack/react-query";

import { EmployeeWithMostAds } from "@/types";

const fetchEmployeesWithMostAds = async (): Promise<EmployeeWithMostAds[]> => {
    const { data } = await axios.get(
        "http://localhost:3000/employees-with-most-ads"
    );
    return data.data;
};

function useEmployeesWithMostAds() {
    return useQuery(["employees-with-most-ads"], fetchEmployeesWithMostAds, {
        staleTime: 60 * 1000,
    });
}
export default useEmployeesWithMostAds;
