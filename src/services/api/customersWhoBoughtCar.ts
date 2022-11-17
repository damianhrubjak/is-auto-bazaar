import axios from "axios";

import { useQuery } from "@tanstack/react-query";

import { CustomerWhoBoughtCar } from "@/types";

const fetchCustomersWhoBoughtCar = async (
    price: number,
    brand: string
): Promise<CustomerWhoBoughtCar[]> => {
    const { data } = await axios.get(
        `http://localhost:3000/customers-who-bought-car?price=${price}&brand=${brand}`
    );
    return data.data;
};

function useCustomersWhoBoughtCar(price = 0, brand = "Opel") {
    return useQuery(
        ["customers-who-bought-car", price, brand],
        async () => fetchCustomersWhoBoughtCar(price, brand),
        {
            staleTime: 60 * 1000,
        }
    );
}
export default useCustomersWhoBoughtCar;
