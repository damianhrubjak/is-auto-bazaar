import { useRef } from "react";

import Heading from "@/components/Heading";
import StatusBar from "@/components/StatusBar";
import useCountOfVehiclesForEveryStateAndBrand from "@/services/api/countOfVehiclesForEveryStateAndBrandAPI";

import DataView from "./DataView";
import GraphView from "./GraphView";

function CountOfVehiclesForEveryStateAndBrand() {
    const { data, isFetching, refetch } =
        useCountOfVehiclesForEveryStateAndBrand();
    const graphViewRef = useRef<HTMLDivElement | null>(null);
    const dataViewRef = useRef<HTMLDivElement | null>(null);

    return (
        <>
            <Heading>
                <span>Vypísanie áut za každý rok a počty ich značiek</span>
                <div className="mt-2 h-2 w-24 rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-500"></div>
            </Heading>

            <div className="mt-16">
                <StatusBar
                    isFetching={isFetching}
                    onRefetchClick={() => refetch()}
                />

                <div className="flex w-80 items-start justify-center gap-2 rounded-xl bg-slate-600 p-2">
                    <button
                        onClick={() =>
                            dataViewRef.current?.scrollIntoView({
                                behavior: "smooth",
                            })
                        }
                        className={`w-1/2 rounded-lg py-2 px-4 text-center transition duration-300`}
                    >
                        Data
                    </button>
                    <button
                        onClick={() =>
                            graphViewRef.current?.scrollIntoView({
                                behavior: "smooth",
                            })
                        }
                        className={`w-1/2 rounded-lg py-2 px-4 text-center transition duration-300`}
                    >
                        Grafy
                    </button>
                </div>

                {data !== undefined && !isFetching && (
                    <>
                        <div ref={graphViewRef} className="mt-16">
                            <GraphView data={data} />
                        </div>
                        <div ref={dataViewRef} className="mt-16">
                            <DataView data={data} />
                        </div>
                    </>
                )}
            </div>
        </>
    );
}

export default CountOfVehiclesForEveryStateAndBrand;
