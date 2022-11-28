import { UserCircleIcon } from "@heroicons/react/24/solid";

import Heading from "@/components/Heading";
import StatusBar from "@/components/StatusBar";
import useEmployeesWithMostAds from "@/services/api/employeesWithMostAdsAPI";

function MostUsedMaintenances() {
    const { data, isFetching, refetch } = useEmployeesWithMostAds();

    return (
        <>
            <Heading>
                <span>Najlepší predajcovia</span>
                <div className="mt-2 h-2 w-24 rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-500"></div>
            </Heading>

            <div className="mt-16">
                <StatusBar
                    isFetching={isFetching}
                    onRefetchClick={() => refetch()}
                />
            </div>
            <div className="mt-16 grid grid-cols-3 gap-8">
                {data !== undefined &&
                    !isFetching &&
                    data?.map(
                        ({ rod_cislo, meno, priezvisko, pocet_predajov }) => (
                            <div
                                key={`${rod_cislo}`}
                                className="w-full rounded-md bg-slate-700 p-4"
                            >
                                <div className="mb-4 flex items-center justify-between">
                                    <UserCircleIcon className="w-1/2 fill-slate-400 " />
                                    <div className="w-1/2">
                                        <p className="w-full text-center text-5xl font-bold">
                                            {pocet_predajov}x
                                        </p>
                                        <p className="text-center text-slate-400">
                                            Predaných vozidiel
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-baseline justify-start">
                                    <p className="w-24 text-slate-300">Meno:</p>
                                    <p className="text-xl font-bold">{meno}</p>
                                </div>
                                <div className="flex items-baseline justify-start">
                                    <p className="w-24 text-slate-300">
                                        Priezvisko:
                                    </p>
                                    <p className="text-xl font-bold">
                                        {priezvisko}
                                    </p>
                                </div>
                                <div className="flex items-baseline justify-start">
                                    <p className="w-24 text-slate-300">
                                        Rod. číslo:
                                    </p>
                                    <p className="text-xl font-bold text-purple-500">
                                        {rod_cislo}
                                    </p>
                                </div>
                            </div>
                        )
                    )}
            </div>
        </>
    );
}

export default MostUsedMaintenances;
