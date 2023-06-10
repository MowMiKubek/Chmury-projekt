import React from 'react'
import { Radar } from 'react-chartjs-2';
const RadarChart = () => {
    const data = {
      labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'],
      datasets: [
        {
          label: 'Dataset 1',
          data: [3, 4, 2, 5, 1],
          backgroundColor: 'rgba(75, 192, 192, 0.4)',
          borderColor: 'rgba(75, 192, 192, 1)',
          pointBackgroundColor: 'rgba(75, 192, 192, 1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(75, 192, 192, 1)',
        },
        {
          label: 'Dataset 2',
          data: [2, 5, 1, 4, 3],
          backgroundColor: 'rgba(192, 75, 192, 0.4)',
          borderColor: 'rgba(192, 75, 192, 1)',
          pointBackgroundColor: 'rgba(192, 75, 192, 1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(192, 75, 192, 1)',
        },
      ],
    };
  
    return <Radar data={data} />;
  };
  
  export default RadarChart;