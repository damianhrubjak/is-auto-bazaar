import { useState } from "react";

import Heading from "@/components/Heading";
import Input from "@/components/Input";
import StatusBar from "@/components/StatusBar";
import useVehiclesInSpecificTime from "@/services/api/vehiclesInSpecificTime";

import VehicleItem from "./VehicleItem";

function VehiclesInSpecificTime() {
    const [fromDate, setFromDate] = useState("2022-01-01");
    const [toDate, setToDate] = useState("2022-11-01");

    const { data, isFetching, refetch } = useVehiclesInSpecificTime(
        fromDate,
        toDate
    );

    return (
        <>
            <Heading>
                <span>
                    Predané vozidlá v zadanom intervale od
                    <span className="mx-2 text-fuchsia-500">
                        {fromDate !== ""
                            ? new Date(fromDate).toLocaleDateString()
                            : null}
                    </span>
                    do
                    <span className="mx-2 text-fuchsia-500">
                        {toDate !== ""
                            ? new Date(toDate).toLocaleDateString()
                            : null}
                    </span>
                </span>
                <div className="mt-2 h-2 w-24 rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-500"></div>
            </Heading>

            <div className="mt-16">
                <StatusBar
                    isFetching={isFetching}
                    onRefetchClick={() => refetch()}
                />

                <p>Zadajte rozsah dátumov kúpy</p>
                <div className="mb-8 flex w-full items-center gap-4">
                    <Input
                        type="date"
                        placeholder="Od kedy"
                        onDebouncedChange={(event) => {
                            setFromDate(event.target.value);
                        }}
                    />
                    <Input
                        type="date"
                        placeholder="Do kedy"
                        onDebouncedChange={(event) => {
                            setToDate(event.target.value);
                        }}
                    />
                </div>

                {data !== undefined &&
                    !isFetching &&
                    data?.map((vehicle) => (
                        <div
                            key={`${vehicle.vin}-${Math.random()}`}
                            className="flex w-full items-center justify-start"
                        >
                            <VehicleItem vehicle={vehicle} />
                        </div>
                    ))}
            </div>
        </>
    );
}

export default VehiclesInSpecificTime;
