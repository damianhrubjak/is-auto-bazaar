import { useState } from "react";

import { VehicleInSpecificTime } from "@/types";

type Props = {
    vehicle: VehicleInSpecificTime;
};

function VehicleItem({
    vehicle: {
        vin,
        brand,
        country,
        engine_capacity,
        engine_power,
        color,
        model,
        manufacturer_date,
        fuel,
        equipment,
    },
}: Props) {
    const [expand, setExpand] = useState(false);

    const changeExpand = () => {
        setExpand(!expand);
    };

    const a = JSON.parse(equipment);

    return (
        <>
            <div
                onClick={changeExpand}
                className={`mb-3 h-full transition-all duration-300 ${
                    expand ? "max-h-[600px]" : "max-h-14"
                } w-full cursor-pointer overflow-hidden rounded-md bg-slate-700`}
            >
                <div className="px-9 text-white">
                    <div className="flex h-14 items-center justify-between ">
                        <p className="font-bold text-purple-400">{vin}</p>
                        <p className="text-lg">{brand}</p>
                    </div>

                    <div className="mb-5 flex justify-between">
                        <div className="flex gap-4">
                            <p className="w-36">Krajina pôvodu: </p>
                            <p className="font-bold text-purple-400">
                                {country}
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <p className="w-36">Dátum výroby: </p>
                            <p className="font-bold text-purple-400">
                                {new Date(
                                    manufacturer_date
                                ).toLocaleDateString()}
                            </p>
                        </div>
                    </div>

                    <div className="mb-5 flex justify-between">
                        <div className="flex gap-4">
                            <p className="w-36">Model vozidla: </p>
                            <p className="font-bold text-purple-400">{model}</p>
                        </div>
                        <div className="flex gap-4">
                            <p className="w-36">Farba vozidla: </p>
                            <p className="font-bold text-purple-400">{color}</p>
                        </div>
                    </div>

                    <div className="mb-3 flex gap-4">
                        <p className="w-36">Kapacita motora: </p>
                        <p className="font-bold text-purple-400">
                            {engine_capacity}
                        </p>
                    </div>

                    <div className="mb-3 flex gap-4">
                        <p className="w-36">Výkon motora: </p>
                        <p className="font-bold text-purple-400">
                            {engine_power}
                        </p>
                    </div>

                    <div className="mb-3 flex gap-4">
                        <p className="w-36">Typ paliva: </p>
                        <p className="font-bold text-purple-400">{fuel}</p>
                    </div>

                    <div className="mb-6">
                        {Object.keys(a).map((key) => (
                            <div className="flex gap-2" key={Math.random()}>
                                <p className="w-32 font-bold text-purple-400">
                                    {key}:{" "}
                                </p>
                                <p className="w-[calc(100%-8rem)]">
                                    {a[key].join(", ")}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default VehicleItem;
