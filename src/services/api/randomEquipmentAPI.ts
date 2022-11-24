import axios from "axios";

import { useQuery } from "@tanstack/react-query";

import { Equipment } from "@/types";

const fetchSellersWhoNeverSoldCar = async (): Promise<Equipment> => {
    const { data } = await axios.get("http://localhost:3000/random-equipment");
    return data.equipment;
};

function useRandomEquipment() {
    return useQuery(["random-equipment"], fetchSellersWhoNeverSoldCar, {
        staleTime: 60 * 1000,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
    });
}
export default useRandomEquipment;
