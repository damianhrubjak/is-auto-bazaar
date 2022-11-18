import axios from "axios";

import { useQuery } from "@tanstack/react-query";

import { SellerWhoNeverSoldCar } from "@/types";

const fetchSellersWhoNeverSoldCar = async (): Promise<
    SellerWhoNeverSoldCar[]
> => {
    const { data } = await axios.get(
        "http://localhost:3000/sellers-who-never-sold-car"
    );
    return data.data;
};

function useSellersWhoNeverSoldCar() {
    return useQuery(
        ["sellers-who-never-sold-car"],
        fetchSellersWhoNeverSoldCar,
        {
            staleTime: 60 * 1000,
        }
    );
}
export default useSellersWhoNeverSoldCar;
