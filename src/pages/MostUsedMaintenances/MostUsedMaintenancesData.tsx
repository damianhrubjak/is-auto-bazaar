import { MostUsedMaintenance } from "@/types";

type Props = { data: MostUsedMaintenance[] };

function MostUsedMaintenancesData({ data }: Props) {
    return (
        <div className="grid w-full grid-cols-3 gap-8">
            {data?.map(({ pozicia, pocet, popis }) => (
                <div
                    key={`${pozicia}-${popis}`}
                    className="flex w-full items-center justify-start"
                >
                    <p className="w-16 text-lg font-bold text-purple-500">
                        {pocet}
                    </p>
                    <p className="w-[calc(100%-4rem)] text-lg">{popis}</p>
                </div>
            ))}
        </div>
    );
}

export default MostUsedMaintenancesData;
