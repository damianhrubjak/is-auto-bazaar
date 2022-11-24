import Heading from "@/components/Heading";
import StatusBar from "@/components/StatusBar";
import useAverageMaintenance from "@/services/api/averageMaintenance";

function AverageMaintenances() {
    const { data, isFetching, refetch } = useAverageMaintenance();

    return (
        <>
            <Heading>
                <span>Priemerný počet dní, pre každé auto v údržbe</span>
                <div className="mt-2 h-2 w-24 rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-500"></div>
            </Heading>

            <div className="mt-16">
                <StatusBar
                    isFetching={isFetching}
                    onRefetchClick={() => refetch()}
                />

                {data !== undefined &&
                    !isFetching &&
                    data?.map(({ vin, count_od_days }) => (
                        <div
                            key={`${vin}`}
                            className="flex w-full items-center justify-start gap-6"
                        >
                            <p className="w-52 text-lg font-bold text-purple-500">
                                {vin}
                            </p>
                            <p className="text-lg">{count_od_days}</p>
                        </div>
                    ))}
            </div>
        </>
    );
}

export default AverageMaintenances;
