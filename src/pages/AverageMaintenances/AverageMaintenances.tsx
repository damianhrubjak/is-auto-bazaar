import Heading from "@/components/Heading";
import StatusBar from "@/components/StatusBar";
import useAverageMaintenance from "@/services/api/averageMaintenance";

function AverageMaintenances() {
    const { data, isFetching, refetch } = useAverageMaintenance();

    return (
        <>
            <Heading>
                <span>Priemerný počet dní v údržbe, pre každé vozidlo</span>
                <div className="mt-2 h-2 w-24 rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-500"></div>
            </Heading>

            <div className="mt-16">
                <StatusBar
                    isFetching={isFetching}
                    onRefetchClick={() => refetch()}
                />
            </div>
            <div className="mt-16 grid grid-cols-3 gap-8 ">
                {data !== undefined &&
                    !isFetching &&
                    data?.map(
                        ({
                            vin,
                            count_of_days,
                            brand,
                            color,
                            country,
                            model,
                        }) => (
                            <div
                                key={`${vin}`}
                                className="relative w-full gap-6 overflow-hidden rounded-md bg-slate-700 p-4"
                            >
                                <Group heading="VIN" value={vin} />
                                <Group
                                    heading="Vozidlo"
                                    value={`${brand} ${model}`}
                                />
                                <Group heading="Farba" value={color} />
                                <Group heading="Krajina" value={country} />
                                <p className="absolute -right-4 -top-12 z-0 select-none text-[11rem] font-bold text-slate-500">
                                    {count_of_days}
                                </p>
                                <p></p>
                            </div>
                        )
                    )}
            </div>
        </>
    );
}

export default AverageMaintenances;

function Group({ heading, value }: { heading: string; value: string }) {
    return (
        <div className="relative z-20 flex items-baseline justify-start">
            <p className="w-24 text-fuchsia-500">{heading}:</p>
            <p className="text-lg font-bold">{value}</p>
        </div>
    );
}
