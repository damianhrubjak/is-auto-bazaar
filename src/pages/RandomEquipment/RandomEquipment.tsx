import Heading from "@/components/Heading";
import StatusBar from "@/components/StatusBar";
import useRandomEquipment from "@/services/api/randomEquipmentAPI";

const defaultValue = ["Nič tu nie je..."];

function RandomEquipment() {
    const { data, isFetching, refetch } = useRandomEquipment();

    return (
        <>
            <Heading>
                <span>Náhodná výbava</span>
                <div className="mt-2 h-2 w-24 rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-500"></div>
            </Heading>

            <div className="mt-16">
                <StatusBar
                    isFetching={isFetching}
                    onRefetchClick={() => refetch()}
                />
            </div>

            <div className="mt-15">
                {data !== undefined && (
                    <div>
                        <Heading className="text-3xl text-fuchsia-500">
                            <span>Výbava:</span>
                        </Heading>
                        <Group
                            heading="Interiér:"
                            values={data?.Interier || defaultValue}
                        />
                        <Group
                            heading="Infotainment:"
                            values={data?.Infotainment || defaultValue}
                        />
                        <Group
                            heading="Exteriér:"
                            values={data?.Exterier || defaultValue}
                        />
                        <Group
                            heading="Extra:"
                            values={data?.Extra || defaultValue}
                        />
                    </div>
                )}
            </div>
        </>
    );
}
export default RandomEquipment;

type Props = {
    heading: string;
    values: string[];
};

function Group({ heading, values }: Props) {
    return (
        <div className="mt-4 rounded-md bg-gray-800 p-4 first:mt-8">
            <h3 className="w-max border-b-2 border-fuchsia-500 text-2xl font-bold text-slate-300">
                {heading}
            </h3>
            <ul className="mt-4 list-disc pl-8">
                {values.map((value) => (
                    <li className="mt-2 text-lg font-bold" key={value}>
                        {value}
                    </li>
                ))}
            </ul>
        </div>
    );
}
