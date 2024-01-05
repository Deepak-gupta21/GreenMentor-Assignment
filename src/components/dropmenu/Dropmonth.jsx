import React, { useState } from 'react';
import "./Dropmonth.css"

const DropdownMenu = () => {
  const [selectedMonth, setSelectedMonth] = useState('');

  // Dummy months for the dropdown
  const months = [
    { value: 'March', label: "March'23 - April'23" },
    { value: 'April', label: "May'23 - June'23" },
    // Add other months as needed
  ];

  const handleChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  return (
    <div>
      <h3>Select Month</h3>
      <select value={selectedMonth} onChange={handleChange}>
        <option value="">Select a month</option>
        {months.map((month) => (
          <option key={month.value} value={month.value}>
            {month.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownMenu;

