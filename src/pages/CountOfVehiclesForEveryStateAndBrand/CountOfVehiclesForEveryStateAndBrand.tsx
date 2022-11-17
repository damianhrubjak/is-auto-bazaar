import Heading from "@/components/Heading";
import StatusBar from "@/components/StatusBar";
import useCountOfVehiclesForEveryStateAndBrand from "@/services/api/countOfVehiclesForEveryStateAndBrandAPI";

function CountOfVehiclesForEveryStateAndBrand() {
    const { data, isFetching, refetch } =
        useCountOfVehiclesForEveryStateAndBrand();

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
                <div className="grid w-full grid-cols-3 gap-6">
                    {data !== undefined &&
                        !isFetching &&
                        data?.map(({ year, brands }) => (
                            <div key={`${year}`} className="">
                                <p className="my-5 w-full border-b-2 border-fuchsia-500 text-2xl font-bold text-fuchsia-500">
                                    {year}
                                </p>
                                <>
                                    {brands.map(({ brand, count }) => {
                                        return (
                                            <div
                                                key={brand}
                                                className="flex justify-between"
                                            >
                                                <p className="text-lg">
                                                    {brand}
                                                </p>
                                                <p className="text-xl font-bold text-fuchsia-500">
                                                    {count}
                                                </p>
                                            </div>
                                        );
                                    })}
                                </>
                            </div>
                        ))}
                </div>
            </div>
        </>
    );
}

export default CountOfVehiclesForEveryStateAndBrand;
