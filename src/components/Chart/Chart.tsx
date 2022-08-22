import * as React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from "react-chartjs-2";
import { IAttributes } from '../../types/types';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export interface IChartProps {
  attributes: IAttributes[];
  label: string;
}

export default class Chart extends React.Component<IChartProps> {
  public render() {

    const { attributes, label } = this.props;

    const names = attributes?.map(attribute => `${attribute.name} (${attribute.unit})`);

    const values = attributes?.map(attribute => attribute.value);

    const data = {
      labels: names,
      datasets: [
        {
          label: label,
          data: values,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
          ],
          borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
          ],
          borderWidth: 1,
        },
      ],
    };

    return (
      <div>
         <Bar data={data} />
      </div>
    );
  }
}
