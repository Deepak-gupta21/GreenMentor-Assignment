import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';
import Papa from 'papaparse';

const DisplayChart = () => {
  useEffect(() => {
    let chartInstance = null;
    const fetchData = async () => {
      try {
        const response = await fetch('../data/data.csv'); // Path to your CSV file
        const text = await response.text();
        const result = Papa.parse(text, { header: true });
        const data = result.data; // Parsed CSV data
        console.log('Parsed Data:', result.data);
        const labels = data.map((row) => row.Month);
        const emissions = data.map((row) => row['Emissions(in CO2e)']);

        const ctx = document.getElementById('myChart').getContext('2d');
        

        
        if (chartInstance) {
            chartInstance.destroy(); // Destroy the existing chart instance
          }
  
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: labels,
            datasets: [
              {
                label: 'Emissions (in CO2e)',
                data: emissions,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                yAxisID: 'y',
              },
              {
                label: 'Emissions Line',
                data: emissions,
                type: 'line',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                yAxisID: 'y',
                fill: false,
              },
            ],
          },
          options: {
            scales: {
              y: {
                type: 'linear',
                display: true,
                position: 'left',
                id: 'y',
              },
            },
          },
        });

        chartInstance = new Chart(ctx, {
            // Chart configuration using the processed data
          });


      } catch (error) {
        console.error('Error fetching or parsing CSV data:', error);
      }
    };

    fetchData();

    return () => {
        if (chartInstance) {
          chartInstance.destroy(); // Ensure the chart instance is destroyed on unmounting
        }
      };
    }, []);



  return (
    <div>
      <canvas id="myChart" width="400" height="130"></canvas>
    </div>
  );
};

export default DisplayChart;
