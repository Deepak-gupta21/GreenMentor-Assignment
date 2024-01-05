// // DoughnutChart.jsx
// import React, { useEffect } from 'react';
// import Chart from 'chart.js/auto';
// import Papa from 'papaparse';

// const DoughnutChart = () => {
//   useEffect(() => {
//     let chartInstance = null;
//     const chartCanvasId = 'myDoughnutChart'; // Unique ID for the chart canvas

//     const fetchData = async () => {
//       try {
//         const response = await fetch('../data/data.csv'); // Path to your CSV file
//         const text = await response.text();
//         const result = Papa.parse(text, { header: true });
//         console.log('Parsed Data:', result.data);
//         const data = result.data; // Parsed CSV data
        

//         const labels = data.map((row) => row.Month);
//         const eR = data.map((row) => row['E/R']);

//         const ctx = document.getElementById(chartCanvasId).getContext('2d');

//         if (chartInstance) {
//           chartInstance.destroy(); // Destroy existing chart instance
//         }

//         chartInstance = new Chart(ctx, {
//           type: 'doughnut',
//           data: {
//             labels: labels,
//             datasets: [
//               {
//                 label: 'E/R',
//                 data: eR,
//                 backgroundColor: [
//                   'rgba(255, 99, 132, 0.5)',
//                   'rgba(54, 162, 235, 0.5)',
//                   'rgba(255, 206, 86, 0.5)',
//                   'rgba(75, 192, 192, 0.5)',
//                   'rgba(153, 102, 255, 0.5)',
//                   'rgba(255, 159, 64, 0.5)',
//                   'rgba(255, 99, 132, 0.5)',
//                 ],
//                 borderColor: [
//                   'rgba(255, 99, 132, 1)',
//                   'rgba(54, 162, 235, 1)',
//                   'rgba(255, 206, 86, 1)',
//                   'rgba(75, 192, 192, 1)',
//                   'rgba(153, 102, 255, 1)',
//                   'rgba(255, 159, 64, 1)',
//                   'rgba(255, 99, 132, 1)',
//                 ],
//                 borderWidth: 1,
//               },
//             ],
//           },
//           options: {
//             // Add options as needed
//           },
//         });
//       } catch (error) {
//         console.error('Error fetching or parsing CSV data:', error);
//       }
//     };

//     fetchData();

//     return () => {
//       if (chartInstance) {
//         chartInstance.destroy(); // Ensure the chart instance is destroyed on unmounting
//       }
//     };
//   }, []);

//   return (
//     <div>
//       <canvas id="myDoughnutChart" width="400" height="200"></canvas>
//     </div>
//   );
// };

// export default DoughnutChart;


import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';

const DoughnutChart = () => {
  useEffect(() => {
    let chartInstance = null;
    const chartCanvasId = 'myDoughnutChart'; // Unique ID for the chart canvas

    const fetchData = async () => {
      try {
        const response = await fetch('../data/data.json'); // Path to your JSON file
        const data = await response.json();
        console.log('JSON Data:', data);

        const labels = data.map((entry) => entry.Month);
        const eR = data.map((entry) => entry['E/R']);

        const ctx = document.getElementById(chartCanvasId).getContext('2d');

        if (chartInstance) {
          chartInstance.destroy(); // Destroy existing chart instance
        }

        chartInstance = new Chart(ctx, {
          type: 'doughnut',
          data: {
            labels: labels,
            datasets: [
              {
                label: 'E/R',
                data: eR,
                backgroundColor: [
                  'rgba(255, 99, 132, 0.5)',
                  'rgba(54, 162, 235, 0.5)',
                  'rgba(255, 206, 86, 0.5)',
                  'rgba(75, 192, 192, 0.5)',
                  'rgba(153, 102, 255, 0.5)',
                  'rgba(255, 159, 64, 0.5)',
                  'rgba(255, 99, 132, 0.5)',
                ],
                borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(255, 99, 132, 1)',
                ],
                borderWidth: 1,
              },
            ],
          },
          options: {
            // Add options as needed
          },
        });
      } catch (error) {
        console.error('Error fetching or parsing JSON data:', error);
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
      <canvas id="myDoughnutChart" width="400" height="200"></canvas>
    </div>
  );
};

export default DoughnutChart;
