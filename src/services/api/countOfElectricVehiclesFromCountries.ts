import axios from "axios";

import { useQuery } from "@tanstack/react-query";

import { CountOfElectricVehiclesFromCountry } from "@/types";

const fetchCountOfElectricVehiclesFromCountries = async (): Promise<
    CountOfElectricVehiclesFromCountry[]
> => {
    const { data } = await axios.get(
        "http://localhost:3000/count-of-electric-vehicles-from-countries"
    );
    return data.data;
};

function useCountOfElectricVehiclesFromCountries() {
    return useQuery(
        ["count-of-electric-vehicles-from-countries"],
        fetchCountOfElectricVehiclesFromCountries,
        {
            staleTime: 60 * 1000,
        }
    );
}
export default useCountOfElectricVehiclesFromCountries;
