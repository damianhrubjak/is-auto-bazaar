import { useMemo } from "react";

import { Bar } from "react-chartjs-2";

import { CountOfVehicleForEveryStateAndBrand, GraphDataset } from "@/types";

import "chart.js/auto";

type Props = {
    data: CountOfVehicleForEveryStateAndBrand[];
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
