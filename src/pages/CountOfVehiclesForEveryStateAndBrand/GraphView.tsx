import { useMemo } from "react";

import { Bar } from "react-chartjs-2";

import { CountOfVehicleForEveryStateAndBrand } from "@/types";

import "chart.js/auto";

type Props = {
    data: CountOfVehicleForEveryStateAndBrand[];
};
type GraphDataset = {
    id: string;
    label: string;
    data: number[];
    hidden?: boolean;
    fill?: boolean;
    borderRadius: number;
};

function GraphView({ data }: Props) {
    const graphLabels = useMemo(() => {
        return data[0].brands.map(({ brand }) => brand);
    }, [data]);

    const graphDatasets = useMemo(() => {
        const datasets: GraphDataset[] = [];
        data.map(({ year, brands }) => {
            datasets.push({
                id: year.toString(),
                label: `Vozidlá za rok ${year}`,
                data: brands.map(({ count }) => count),
                hidden: true,
                fill: true,
                borderRadius: 4,
            });
        });

        return datasets;
    }, [data]);

    console.log({ data, graphDatasets });
    return (
        <div>
            <p></p>

            <Bar
                datasetIdKey="id"
                data={{
                    labels: graphLabels,
                    datasets: graphDatasets,
                }}
            />
        </div>
    );
}

export default GraphView;
