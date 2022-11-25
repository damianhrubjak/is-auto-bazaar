import { useState } from "react";

import Heading from "@/components/Heading";
import Input from "@/components/Input";
import StatusBar from "@/components/StatusBar";
import usePeoplesWhoBoughtVehicleInGivenTime from "@/services/api/peoplesWhoBoughtVehicleInGivenTime";

function PeoplesWhoBoughtVehicleInGivenTime() {
    const [inputDate, setInputDate] = useState("2006-03-04");

    const { data, isFetching, refetch } =
        usePeoplesWhoBoughtVehicleInGivenTime(inputDate);

    return (
        <>
            <Heading>
                <span>
                    Ľudia, ktorí si kúpili vozidlo v danom mesiaci a danom roku
                    - <span className="text-fuchsia-500">{inputDate}</span>.
                </span>
                <div className="mt-2 h-2 w-24 rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-500"></div>
            </Heading>

            <div className="mt-16">
                <StatusBar
                    isFetching={isFetching}
                    onRefetchClick={() => refetch()}
                />

                <div className="mb-8 flex w-full items-center gap-4">
                    <Input
                        type="date"
                        placeholder="Dátum kúpy"
                        onDebouncedChange={(event) => {
                            setInputDate(event.target.value);
                        }}
                    />
                </div>

                {data !== undefined &&
                    !isFetching &&
                    data?.map(
                        ({
                            id_number,
                            name,
                            surname,
                            car_id,
                            date_of_purchase,
                        }) => (
                            <div
                                key={`${id_number}_${car_id}`}
                                className="flex w-full items-center justify-between"
                            >
                                <p className="w-28 text-lg font-bold text-purple-500">
                                    {id_number}
                                </p>
                                <p className="w-28 text-lg">{name}</p>
                                <p className="w-28 text-lg">{surname}</p>
                                <p className="w-28 text-lg text-purple-500">
                                    {car_id}
                                </p>
                                <p className="w-28 text-lg">
                                    {new Date(
                                        date_of_purchase
                                    ).toLocaleDateString()}
                                </p>
                            </div>
                        )
                    )}
            </div>
        </>
    );
}

export default PeoplesWhoBoughtVehicleInGivenTime;
