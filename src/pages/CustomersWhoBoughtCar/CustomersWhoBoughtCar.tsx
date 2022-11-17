import { useState } from "react";

import Heading from "@/components/Heading";
import Input from "@/components/Input";
import StatusBar from "@/components/StatusBar";
import useCustomersWhoBoughtCar from "@/services/api/customersWhoBoughtCar";

function CustomersWhoBoughtCar() {
    const [priceOfCar, setPriceOfCar] = useState(0);
    const [brandOfCar, setBrandOfCar] = useState("");

    const { data, isFetching, refetch } = useCustomersWhoBoughtCar(
        priceOfCar,
        brandOfCar
    );

    return (
        <>
            <Heading>
                <span>Zákazníci, čo si kúpili danú značku za danú cenu</span>
                <div className="mt-2 h-2 w-24 rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-500"></div>
            </Heading>

            <div className="mt-16">
                <StatusBar
                    isFetching={isFetching}
                    onRefetchClick={() => refetch()}
                />

                <div className="mb-8 flex w-full items-center gap-4">
                    <Input
                        type="number"
                        step="1"
                        placeholder="Cena auta"
                        onDebouncedChange={(event) => {
                            setPriceOfCar(Number(event.target.value));
                        }}
                    />
                    <Input
                        type="text"
                        placeholder="Značka auta"
                        onDebouncedChange={(event) => {
                            setBrandOfCar(event.target.value);
                        }}
                    />
                </div>

                {data !== undefined &&
                    !isFetching &&
                    data?.map(
                        ({
                            id,
                            name,
                            surname,
                            id_vehicle,
                            price,
                            brand_vehicle,
                            model_vehicle,
                        }) => (
                            <div
                                key={`${id}-${id_vehicle}`}
                                className="flex w-full items-center justify-between gap-4"
                            >
                                <p className="w-full max-w-[190px] text-left font-bold text-purple-500">
                                    {id}
                                </p>
                                <p className="w-full max-w-[190px] text-left">
                                    {name}
                                </p>
                                <p className="w-full max-w-[120px] text-left">
                                    {surname}
                                </p>
                                <p className="w-full max-w-[280px] text-left">
                                    {id_vehicle}
                                </p>
                                <p className="w-full max-w-[190px] text-left">
                                    {price}{" "}
                                    <span className="text-indigo-500">€</span>
                                </p>
                                <p className="w-full max-w-[190px] text-left font-bold text-purple-500">
                                    {brand_vehicle}
                                </p>
                                <p className="w-full max-w-[190px] text-left">
                                    {model_vehicle}
                                </p>
                            </div>
                        )
                    )}
            </div>
        </>
    );
}

export default CustomersWhoBoughtCar;
