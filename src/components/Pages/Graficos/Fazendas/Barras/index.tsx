import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Header } from '../../../../../styles/components/Graficos';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Custos',
      data: [19,20,30,10,9,5,16,15],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Produção',
      data: [20,30,10,9,5,16,15,19],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};


const VerticalBar = () => (
  <>
    <Header>
      <h1>Desempenho</h1>
    </Header>
    <Bar data={data} options={options} />
  </>
);

export default VerticalBar;