import { CountOfVehicleForEveryStateAndBrand } from "@/types";

type Props = {
    data: CountOfVehicleForEveryStateAndBrand[];
};

function DataView({ data }: Props) {
    return (
        <div className="grid w-full grid-cols-3 gap-6">
            {data.map(({ year, brands }) => (
                <div key={`${year}`}>
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
                                    <p className="text-lg">{brand}</p>
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
    );
}

export default DataView;
