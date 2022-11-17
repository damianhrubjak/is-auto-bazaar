import Heading from "@/components/Heading";
import StatusBar from "@/components/StatusBar";
import useMostUsedMaintenances from "@/services/api/mostUsedMaintenancesAPI";

function MostUsedMaintenances() {
    const { data, isFetching, refetch } = useMostUsedMaintenances();

    return (
        <>
            <Heading>
                <span>Najpoužívanejšie údržby</span>
                <div className="mt-2 h-2 w-24 rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-500"></div>
            </Heading>

            <div className="mt-16">
                <StatusBar
                    isFetching={isFetching}
                    onRefetchClick={() => refetch()}
                />

                {data !== undefined &&
                    !isFetching &&
                    data?.map(({ pozicia, pocet, popis }) => (
                        <div
                            key={`${pozicia}-${popis}`}
                            className="flex w-1/3 items-center justify-start"
                        >
                            <p className="w-16 text-lg font-bold text-purple-500">
                                {pocet}
                            </p>
                            <p className="w-[calc(100%-4rem)] text-lg">
                                {popis}
                            </p>
                        </div>
                    ))}
            </div>
        </>
    );
}

export default MostUsedMaintenances;
