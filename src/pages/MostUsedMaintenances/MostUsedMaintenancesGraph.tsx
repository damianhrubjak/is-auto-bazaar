import { useMemo } from "react";

import { Bar } from "react-chartjs-2";

import { GraphDataset, MostUsedMaintenance } from "@/types";

import "chart.js/auto";

type Props = {
    data: MostUsedMaintenance[];
};

function MostUsedMaintenancesGraph({ data }: Props) {
    const graphLabels = useMemo(() => {
        const labels: string[] = [];
        data.map(({ popis, pocet }) => (pocet > 1 ? labels.push(popis) : null));
        return labels;
    }, [data]);

    const graphDatasets = useMemo(() => {
        const datasets: GraphDataset[] = [];
        const values: number[] = [];
        data.map(({ pocet }) => pocet > 1 && values.push(pocet));

        datasets.push({
            id: "Údržby",
            label: "Údržby, ktoré boli vykonané viac ako 1x",
            data: values,
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

export default MostUsedMaintenancesGraph;
