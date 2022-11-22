import { useMemo } from "react";

import { Bar } from "react-chartjs-2";

import { CountOfElectricVehiclesFromCountry, GraphDataset } from "@/types";

import "chart.js/auto";

type Props = {
    data: CountOfElectricVehiclesFromCountry[];
};

function GraphView({ data }: Props) {
    const graphLabels = useMemo(() => {
        return data.map(({ country }) => country);
    }, [data]);

    const graphDatasets = useMemo(() => {
        const datasets: GraphDataset[] = [];

        datasets.push({
            id: "country",
            label: `Elektrické vozidlá`,
            data: data.map(({ count }) => count),
            hidden: false,
            fill: true,
            borderRadius: 4,
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
