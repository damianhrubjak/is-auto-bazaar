import { useState } from "react";

import Heading from "@/components/Heading";
import Input from "@/components/Input";
import StatusBar from "@/components/StatusBar";
import useVehiclesFromState from "@/services/api/vehiclesFromStateAPI";

function VehiclesFromState() {
    const [countryId, setCountryId] = useState("SK");
    const [maintenancesCount, setMaintenancesCount] = useState(0);

    const { data, isFetching, refetch } = useVehiclesFromState(
        countryId,
        maintenancesCount
    );

    return (
        <>
            <Heading>
                <span>Vozidlá z danej krajiny</span>
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
                        defaultValue="SK"
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

                {data !== null && !isFetching && (
                    <div className="w-full rounded-md bg-slate-700 p-4">
                        <div className="flex items-center justify-between">
                            <h2 className="text-6xl font-bold text-fuchsia-500">
                                {data?.country}
                            </h2>
                            <img
                                src={`https://flagcdn.com/h60/${data?.country.toLowerCase()}.png`}
                                alt="South Africa"
                            />
                        </div>
                        <div className="mt-8 grid grid-cols-4 gap-4">
                            {data?.vehicles?.map(
                                ({ vin, model, brand, count }) => (
                                    <div
                                        key={`${vin}`}
                                        className="w-full rounded-md bg-slate-800 p-4"
                                    >
                                        <h3 className="text-xl font-bold text-fuchsia-500">
                                            {brand} {model}
                                        </h3>
                                        <p className="mt-2 w-full text-lg">
                                            {vin}
                                        </p>
                                        <p className="mt-2 w-full text-lg">
                                            {count}
                                        </p>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default VehiclesFromState;
