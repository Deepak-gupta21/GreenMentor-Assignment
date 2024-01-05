import React from 'react';
import Papa from 'papaparse';

const DataTable = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('../data/data.csv'); // Path to your CSV file
        const text = await response.text();
        const result = Papa.parse(text, { header: true });
        setData(result.data);
      } catch (error) {
        console.error('Error fetching or parsing CSV data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Data Table</h2>
      <table>
        <thead>
          <tr>
            <th>Supplier</th>
            <th>Year</th>
            <th>E/R Ratio</th>
            <th>MoM</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.Supplier}</td>
              <td>{row.Year}</td>
              <td>{row['E/R']}</td>
              <td>{row.MoM}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;