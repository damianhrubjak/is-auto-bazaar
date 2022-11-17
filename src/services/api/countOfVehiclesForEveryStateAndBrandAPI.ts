import axios from "axios";

import { useQuery } from "@tanstack/react-query";

import { CountOfVehicleForEveryStateAndBrand } from "@/types";

const fetchCountOfVehiclesForEveryStateAndBrand = async (): Promise<
    CountOfVehicleForEveryStateAndBrand[]
> => {
    const { data } = await axios.get(
        "http://localhost:3000/count-of-vehicles-for-every-state-and-brand"
    );
    return data.data;
};

function useCountOfVehiclesForEveryStateAndBrand() {
    return useQuery(
        ["count-of-vehicles-for-every-state-and-brand"],
        fetchCountOfVehiclesForEveryStateAndBrand,
        {
            staleTime: 60 * 1000,
        }
    );
}
export default useCountOfVehiclesForEveryStateAndBrand;
