import Heading from "@/components/Heading";
import StatusBar from "@/components/StatusBar";
import useEmployeesWithMostAds from "@/services/api/employeesWithMostAdsAPI";

function MostUsedMaintenances() {
    const { data, isFetching, refetch } = useEmployeesWithMostAds();

    return (
        <>
            <Heading>
                <span>Najaktívnejší predajcovia</span>
                <div className="mt-2 h-2 w-24 rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-500"></div>
            </Heading>

            <div className="mt-16">
                <StatusBar
                    isFetching={isFetching}
                    onRefetchClick={() => refetch()}
                />

                {data !== undefined &&
                    !isFetching &&
                    data?.map(
                        ({ rod_cislo, meno, priezvisko, pocet_predajov }) => (
                            <div
                                key={`${rod_cislo}`}
                                className="flex w-1/3 items-center justify-evenly"
                            >
                                <p>{rod_cislo}</p>
                                <p>{meno}</p>
                                <p>{priezvisko}</p>
                                <p>{pocet_predajov}</p>
                            </div>
                        )
                    )}
            </div>
        </>
    );
}

export default MostUsedMaintenances;
