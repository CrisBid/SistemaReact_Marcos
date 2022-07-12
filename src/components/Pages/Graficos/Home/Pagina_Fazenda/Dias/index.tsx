import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['', ''],
  datasets: [
    {
      label: '# of Votes',
      data: [15, 15],
      backgroundColor: [
        'rgb(0, 102, 204)',
        'rgba(54, 162, 235, 0.8)',
        'rgba(255, 206, 86, 0.8)',
        'rgba(75, 192, 192, 0.8)',
        'rgba(153, 102, 255, 0.8)',
        'rgba(255, 159, 64, 0.8)',
      ],
    },
  ],
};


const Dias= () => (
    <>
        <Doughnut data={data} />
    </>
)

export default Dias;