import Heading from "@/components/Heading";
import StatusBar from "@/components/StatusBar";
import useSellersWhoNeverSoldCar from "@/services/api/sellersWhoNeverSoldCar";

function SellersWhoNeverSoldCar() {
    const { data, isFetching, refetch } = useSellersWhoNeverSoldCar();

    return (
        <>
            <Heading>
                <span>Predajcovia, ktorí nikdy nepredali auto</span>
                <div className="mt-2 h-2 w-24 rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-500"></div>
            </Heading>

            <div className="mt-16">
                <StatusBar
                    isFetching={isFetching}
                    onRefetchClick={() => refetch()}
                />

                {data !== undefined &&
                    !isFetching &&
                    data?.map(({ id, id_osoba, name, surname }) => (
                        <div
                            key={`${id}`}
                            className="flex w-2/3 items-center justify-start"
                        >
                            <p className="w-[calc(100%-4rem)] text-lg font-bold text-purple-500">
                                {id}
                            </p>
                            <p className="w-[calc(100%-4rem)] text-lg">
                                {id_osoba}
                            </p>
                            <div className="flex ">
                                <p className="w-[calc(100%-4rem)] text-lg">
                                    {name}
                                </p>
                                <p className="w-[calc(100%-4rem)] text-lg">
                                    {surname}
                                </p>
                            </div>
                        </div>
                    ))}
            </div>
        </>
    );
}

export default SellersWhoNeverSoldCar;
