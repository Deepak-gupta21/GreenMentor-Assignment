// Sidebar.jsx
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.css"

const Sidebar = () => {
  const [energyOpen, setEnergyOpen] = useState(false);

  const toggleEnergy = () => {
    setEnergyOpen(!energyOpen);
  };

  return (
    <div className="sidebar">
      <h2>Peters surgical</h2>
      <ul>
        <li onClick={toggleEnergy}>
          Energy <FontAwesomeIcon icon={faAngleDown} />
        </li>
        {energyOpen && (
          <ul>
            <li>Category 1</li>
            <li>Category 4</li>
            <li>Category 6</li>
            <li>Category 7</li>
            <li>Category 9</li>
          </ul>
        )}
        {/* Other hardcoded items */}
        <li>Water and Effulents</li>
        <li>Energy</li>
        <li>Waste</li>
      </ul>
      <button className="custom-button">Open Help Centre</button>
    </div>
  );
};

export default Sidebar;
