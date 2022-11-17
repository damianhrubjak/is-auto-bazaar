import { useState } from "react";

import Heading from "@/components/Heading";
import Input from "@/components/Input";
import StatusBar from "@/components/StatusBar";
import useVehiclesFromState from "@/services/api/vehiclesFromStateAPI";

function MostUsedMaintenances() {
    const [countryId, setCountryId] = useState("");
    const [maintenancesCount, setMaintenancesCount] = useState(0);

    const { data, isFetching, refetch } = useVehiclesFromState(
        countryId,
        maintenancesCount
    );

    return (
        <>
            <Heading>
                <span>Vozidla z danej krajiny</span>
                <div className="mt-2 h-2 w-24 rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-500"></div>
            </Heading>

            <div className="mt-16">
                <StatusBar
                    isFetching={isFetching}
                    onRefetchClick={() => refetch()}
                />

                <div className="mb-8 flex w-full items-center gap-4">
                    <Input
                        type="text"
                        placeholder="ID Štátu"
                        onDebouncedChange={(event) => {
                            setCountryId(event.target.value);
                        }}
                    />
                    <Input
                        type="number"
                        step="1"
                        placeholder="Počet údržb"
                        onDebouncedChange={(event) => {
                            setMaintenancesCount(Number(event.target.value));
                        }}
                    />
                </div>

                {data !== undefined &&
                    !isFetching &&
                    data?.map(({ vin }) => (
                        <div
                            key={`${vin}`}
                            className="flex w-1/3 items-center justify-start"
                        >
                            <p className="w-full">{vin}</p>
                        </div>
                    ))}
            </div>
        </>
    );
}

export default MostUsedMaintenances;
