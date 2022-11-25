import axios from "axios";

import { useQuery } from "@tanstack/react-query";

import { PeopleWhoBoughtVehicleInGivenTime } from "@/types";

const fetchPeoplesWhoBoughtVehicleInGivenTime = async (
    date: string
): Promise<PeopleWhoBoughtVehicleInGivenTime[]> => {
    const { data } = await axios.get(
        `http://localhost:3000/peoples-who-bought-vehicle-in-given-time?date=${date}`
    );
    return data.data;
};

function usePeoplesWhoBoughtVehicleInGivenTime(date = "2000-01-01") {
    return useQuery(
        ["peoples-who-bought-vehicle-in-given-time", date],
        async () => fetchPeoplesWhoBoughtVehicleInGivenTime(date),
        {
            staleTime: 60 * 1000,
        }
    );
}
export default usePeoplesWhoBoughtVehicleInGivenTime;
