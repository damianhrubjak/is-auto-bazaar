import { CountOfElectricVehiclesFromCountry } from "@/types";

type Props = {
    data: CountOfElectricVehiclesFromCountry[];
};

function DataView({ data }: Props) {
    return (
        <div className="grid w-full grid-cols-3 gap-10 ">
            {data.map(({ country, count }) => (
                <div
                    key={`${country}`}
                    className="flex items-center border-b-2 border-slate-700"
                >
                    <p className="my-5 w-full text-2xl font-bold text-fuchsia-500">
                        {country}
                    </p>
                    <p>{count}</p>
                </div>
            ))}
        </div>
    );
}

export default DataView;
