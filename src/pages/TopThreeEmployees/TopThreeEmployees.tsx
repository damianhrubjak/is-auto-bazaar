import { useMemo } from "react";

import { groupBy } from "lodash-es";

import Heading from "@/components/Heading";
import StatusBar from "@/components/StatusBar";
import useTopThreeEmployees from "@/services/api/useTopThreeEmployeesAPI";

function TopThreeEmployees() {
    const { data, isFetching, refetch } = useTopThreeEmployees();

    const dataGrouped = useMemo(() => groupBy(data, "description"), [data]);

    return (
        <>
            <Heading>
                <span>Top traja zamestnanci pre každú údržbu</span>
                <div className="mt-2 h-2 w-24 rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-500"></div>
            </Heading>

            <div className="mt-16">
                <StatusBar
                    isFetching={isFetching}
                    onRefetchClick={() => refetch()}
                />

                <div className="grid grid-cols-2 gap-8">
                    {dataGrouped !== undefined &&
                        !isFetching &&
                        Object.keys(dataGrouped)?.map((key) => (
                            <div key={key}>
                                <h2 className="mb-4 border-b-2 border-purple-500 text-xl font-bold text-fuchsia-500">
                                    {key}
                                </h2>
                                {dataGrouped[key].map(
                                    ({
                                        id,
                                        description,
                                        name,
                                        last_name,
                                        count,
                                    }) => (
                                        <div
                                            key={`${id}-${description}`}
                                            className="flex w-full items-center justify-between"
                                        >
                                            <div className="flex justify-between">
                                                <p className="w-5/12 text-lg">
                                                    {name}
                                                </p>
                                                <p className="w-5/12 text-lg">
                                                    {last_name}
                                                </p>
                                            </div>

                                            <p className="w-2/12 text-lg">
                                                {count}
                                            </p>
                                        </div>
                                    )
                                )}
                            </div>
                        ))}
                </div>
            </div>
        </>
    );
}
export default TopThreeEmployees;
