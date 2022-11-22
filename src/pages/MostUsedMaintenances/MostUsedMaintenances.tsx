import Heading from "@/components/Heading";
import StatusBar from "@/components/StatusBar";
import useMostUsedMaintenances from "@/services/api/mostUsedMaintenancesAPI";

import MostUsedMaintenancesData from "./MostUsedMaintenancesData";
import MostUsedMaintenancesGraph from "./MostUsedMaintenancesGraph";

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

                {data !== undefined && !isFetching && (
                    <>
                        <MostUsedMaintenancesGraph data={data} />
                        <div className="mt-16">
                            <MostUsedMaintenancesData data={data} />
                        </div>
                    </>
                )}
            </div>
        </>
    );
}

export default MostUsedMaintenances;
